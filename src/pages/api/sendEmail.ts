/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

export default async function handler(
  req: { body: any; method: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { success: boolean; data?: SentMessageInfo; error?: any }): void;
        new (): any;
      };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  },
) {
  const { body, method } = req;

  if (method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'Zoho',
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USERNAME}@zohomail.com>`,
      to: `${process.env.EMAIL_USERNAME}@zohomail.com`,
      subject: body.subject,
      text: body.text,
    };

    try {
      const emailRes = await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, data: emailRes });
    } catch (error) {
      console.log('error', error);
      res.status(500).json({ success: false, error: (error as any).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
