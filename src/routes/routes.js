import listController from '../controllers/listController';

export default app => {
  app.get('/', listController.createList);
};
