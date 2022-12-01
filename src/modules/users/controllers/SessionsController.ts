import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createService = new CreateSessionService();

    const user = await createService.execute({ email, password });

    return response.json(user);
  }
}
