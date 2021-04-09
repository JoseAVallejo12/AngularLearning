import { v4 as uuidv4 } from 'uuid';

class Task {
  public id: string;
  public title: string;
  public description: string;
  public status: boolean;

  constructor() {
    this.id = uuidv4()
    this.title = '';
    this.description = '';
    this.status = false;
  }
}
export default Task;
