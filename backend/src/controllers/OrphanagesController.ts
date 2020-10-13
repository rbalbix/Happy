import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';

export default class OrphanagesController {
  async index(request: Request, response: Response) {
    try {
      const orphanageRepository = getRepository(Orphanage);

      const orphanages = await orphanageRepository.find();

      return response.json(orphanages);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const orphanageRepository = getRepository(Orphanage);

      const orphanage = await orphanageRepository.findOneOrFail(id);

      return response.json(orphanage);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }

  async create(request: Request, response: Response) {
    try {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      } = request.body;

      const orphanageRepository = getRepository(Orphanage);

      const requestImages = request.files as Express.Multer.File[];
      const images = requestImages.map((image) => {
        return { path: image.filename };
      });

      const orphanage = orphanageRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images,
      });

      await orphanageRepository.save(orphanage);

      return response.status(201).json(orphanage);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
