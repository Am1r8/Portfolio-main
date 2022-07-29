/* eslint-disable prettier/prettier */
// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import config from '../../../config.json';


export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n') + "\n\nAND MORE BY WRITING 'repo'";
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  window.open(`${config.readme_url}`);
  return `Opening GitHub README ...\n`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather Toronto';
  }
  const weather = await getWeather(city);
  return weather;
};
