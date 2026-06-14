import Resource from '../models/Resource.js';

export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('owner', 'username').sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createResource = async (req, res) => {
  try {
    const resource = new Resource({ ...req.body, owner: req.user.id });
    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create resource' });
  }
};
