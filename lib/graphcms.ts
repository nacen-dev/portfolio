const fetchAPI = async (query: string) => {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

interface IProject {
  id: string;
  name: string;
  image: {
    url: string;
  };
  description: string;
  repositoryLink: string;
  websiteLink?: string;
}

export interface IProjectData {
  projects: IProject[];
}

export const getProjects = async (): Promise<IProjectData> => {
  const data = await fetchAPI(
    `
    query Projects {
      projects {
        id
        name
        image {
          url
        }
        description
        repositoryLink
        websiteLink
      }
    }
    `
  );

  return data;
};

export interface IContactData {
  contact: {
    githubLink: string;
    linkedinLink: string;
    email: string;
  };
}

export const getContact = async (): Promise<IContactData> => {
  const data = await fetchAPI(
    `
    {
      contact(where:{id:"cl4h7k3mk3gjw0d16xtfgwmtr"}) {
        githubLink
        linkedinLink
        email
      }
    }`
  );

  return data;
};

export interface IAboutData {
  about: {
    introduction: string;
    description: string;
  };
}

export const getAbout = async (): Promise<IAboutData> => {
  const data = await fetchAPI(
    `
    {
      about(where:{ id:"cl4h6s6yr3e5o0dzltcxqodt0"}) {
        introduction
        description
      }
    }
    `
  );

  return data;
};
