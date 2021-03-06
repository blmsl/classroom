import params from './params';
import {db} from '../db';
import DatabaseSchema from '../db/schema';

const schema = new DatabaseSchema();
schema.addTable('users', {});
schema.addTable('blacklist', {});
schema.addTable('events', {});

db.setSchema(schema);

/**
 * Creates the database conection, initalizes the tables.
 */
export default async () => {
    return new Promise((resolve, reject) => {
        db.on('ready', resolve);
        db.on('error', reject);
        db.connect({
            host: params.DB_HOST,
            port: params.DB_PORT,
            db: params.DB_NAME,
        });
    });
};
