// pages/api/profile.js
import { getSession } from 'next-auth/react';
import { connectMongoDB, updateUser } from '../../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  await connectMongoDB();

  const { name, email, password } = req.body;

  try {
    const user = await updateUser(session.user.id, { name, email, password });

    if (!user) {
      return res.status(400).json({ message: 'Update failed' });
    }

    return res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}