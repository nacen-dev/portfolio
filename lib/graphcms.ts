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
