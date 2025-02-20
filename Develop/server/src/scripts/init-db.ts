import sequelize from '../config/database';
import { User } from '../models/user';
import { seedUsers } from '../seeds/user-seeds';

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Sync all models
    await sequelize.sync({ force: true });
    console.log('Database schema has been created successfully.');

    // Seed initial data
    await seedUsers();
    console.log('Initial data has been seeded successfully.');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

initDb();