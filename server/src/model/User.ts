export default class  User {

  static async findAll() {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve( [
        {
          id: 1,
          name: 'sumo'
        },
        {
          id: 2,
          name: 'sumo'
        }
      ]);
    }, 1000);
    });
  }
}
