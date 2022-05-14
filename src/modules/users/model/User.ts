import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();

    this.created_at = new Date();
    this.updated_at = this.created_at;
    this.admin = false;
  }

  turnAdmin(): User {
    this.admin = true;

    return this;
  }

  isAdmin(): boolean {
    return this.admin;
  }

  setName(name: string): User {
    this.name = name;

    return this;
  }

  setEmail(email: string): User {
    this.email = email;

    return this;
  }
}

export { User };
