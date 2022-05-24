/* eslint-disable prettier/prettier */
import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  return `


 ABOUT ME 
 ${config.name}
 Resume: <u><a href="${config.resume_url}" target="_blank">resume</a></u>
爵 Repo: <u><a href="${config.repo}" target="_blank">Github repo</a></u>
-----------
 CONTACT 
  Email: <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  Github: <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
📸 Instagram: <u><a href="https://www.instagram.com/${config.social.instagram}" target="_blank">https://www.instagram.com/${config.social.instagram}</a></u>
  Linkedin: <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
🐦 Twitter: <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>

  `;
};

export default summary;