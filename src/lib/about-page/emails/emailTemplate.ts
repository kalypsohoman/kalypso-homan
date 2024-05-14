const emailTemplate = (name: string, subject: string, email: string, body: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Email Title</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #ffffff !important; background: #000000; box-sizing: border-box;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="border-bottom: 1px solid #ccc; padding-bottom: 20px; text-align: center;">
            <a href="https://www.kalypsohoman.com" target="_blank">
                <img src="cid:logo" alt="Kalypso Logo and a link to my Website" style="max-width: 100%; height: auto;">
            </a>
        </div>
        <div style="padding: 20px 0; margin: 10px; color: #ffffff !important;">
            <p style="color: #ffffff !important;">Hi ${name},</p>
            <p style="color: #ffffff !important;">Thank you for sending your message. I'll get back to you soon.</p>
            <div style="padding: 20px; border: 2px solid #ffffff; border-radius: 5px; margin: 40px;">
                <h3 style="color: #ffffff !important; text-align: center; padding: 15px; border: 1px solid #ffffff;">Your message</h3>
                <div style="border: 1px solid #ffffff; padding: 10px;">
                    <p style="color: #ffffff !important; margin: 10px; font-size: 0.8rem;">Subject: ${subject}</p>
                    <p style="color: #ffffff !important; margin: 10px; font-size: 0.8rem;">From: ${name}</p>
                    <p style="color: #ffffff !important; margin: 10px; font-size: 0.8rem;">Email: ${email}</p>
                </div>
                <div style="border: 1px solid #ffffff; margin-top: 1rem; padding: 15px;">
                    <p style="color: #ffffff !important;">Text: ${body}</p>
                </div>
            </div>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ccc;">
            <tr>
                <td align="center" style="font-size: 0;">
                    <a href="https://kalypsohoman.com" target="_blank" style="display: inline-block; margin-right: 20px;">
                        <img src="cid:kalypsoIcon" alt="Link to my Website" width="50" height="auto" border="0">
                    </a>
                    <a href="https://github.com/kalypsohoman" target="_blank" style="display: inline-block; margin-right: 20px;">
                        <img src="cid:githubIcon" alt="Link to my Github" width="50" height="auto" border="0">
                    </a>
                    <a href="http://www.linkedin.com/in/kalypsohoman/" target="_blank" style="display: inline-block; margin-right: 20px;">
                        <img src="cid:linkedinIcon" alt="Link to my LinkedIn" width="50" height="auto" border="0">
                    </a>
                    <a href="https://www.instagram.com/kalypso_designs/" target="_blank" style="display: inline-block;">
                        <img src="cid:instagramIcon" alt="Link to my Instagram" width="50" height="auto" border="0">
                    </a>
                </td>
            </tr>
        </table>
    
    </div>
</body>
</html>
`;

export default emailTemplate;