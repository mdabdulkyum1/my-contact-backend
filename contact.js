// api/contact.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        
        // Implement your backend logic here, like sending an email or saving to a database.
        
        res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
