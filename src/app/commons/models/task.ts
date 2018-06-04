export class Task {
  id: number;
  name: string;
  description: string;
  created: Date;

  constructor(id: number, name: string, description: string, created: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created = created;
  }
}
