import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/about-page/emails/emailSetup.server.js";
import type { Options } from "nodemailer/lib/mailer";
import fs from 'fs';
import { promisify } from 'util';
import emailTemplate from "$lib/about-page/emails/emailTemplate.js";

const readFileAsync = promisify(fs.readFile)

export const actions = {
    default: async ({ request }) => {
        try {

            // Read the image files
            const logo = await readFileAsync('static/images/nav-logo.png');
            const kalypsoIcon = await readFileAsync('static/images/icons/kalypso.png');
            const githubIcon = await readFileAsync('static/images/icons/github.png');
            const instagramIcon = await readFileAsync('static/images/icons/instagram.png');
            const linkedinIcon = await readFileAsync('static/images/icons/linkedin.png');

            // Read the form data
            const formData = await request.formData();
            const name = formData.get("name")?.toString();
            const email = formData.get("email")?.toString();
            const subject = formData.get("subject")?.toString();
            const body = formData.get("body")?.toString();
            let html;

            // If the form data was not submitted, throw an Error
            if(!name || !email || !subject || !body){
                throw new Error("Email form wasn't complete upon submission.");
            }

            // Generate the html for the email
            html = emailTemplate(name, subject, email, body);
        
            // Format the options for the email 
            const message = {
                from: GOOGLE_EMAIL,
                to: email,
                bcc: "catcatmcgee@gmail.com",
                subject: "Kalypso received your message",
                text: body,
                html: html,
                attachments: [{
                    filename: 'kalypso.png',
                    content: logo,
                    disposition: 'inline',
                    encoding: 'base64',
                    cid: 'logo',
                    contentType: 'image/png'
                }, {
                    filename: 'githubIcon.png',
                    content: githubIcon,
                    disposition: 'inline',
                    encoding: 'base64',
                    cid: 'githubIcon',
                    contentType: 'image/png'
                },{
                    filename: 'instagramIcon.png',
                    content: instagramIcon,
                    disposition: 'inline',
                    encoding: 'base64',
                    cid: 'instagramIcon',
                    contentType: 'image/png'
                }, {
                    filename: 'linkedinIcon.png',
                    content: linkedinIcon,
                    disposition: 'inline',
                    encoding: 'base64',
                    cid: 'linkedinIcon',
                    contentType: 'image/png'
                }, {
                    filename: 'kalypsoIcon.png',
                    content: kalypsoIcon,
                    disposition: 'inline',
                    encoding: 'base64',
                    cid: 'kalypsoIcon',
                    contentType: 'image/png'
                }],
            };

            const sendEmail = async (message: Options) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};