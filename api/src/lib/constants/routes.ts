class BaseRoute {
  protected readonly rootPath: string;
  constructor() {
    this.rootPath = "/loremipsum/api/v1";
  }

  protected createRoute(path: string): string {
    if (path.charAt(0) === '/') return `${this.rootPath}/${path.slice(1)}`;

    return `${this.rootPath}/${path}`;
  }
}

class ROUTES extends BaseRoute {
  constructor() {
    super();
  }

  readonly AUTH = {
    LOGIN: this.createRoute("/auth/login"),
    SIGNUP: this.createRoute("/auth/signin")
  }

}

const routes = new ROUTES();

export default routes;

