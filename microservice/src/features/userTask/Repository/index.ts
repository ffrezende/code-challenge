import sqlite3 from'sqlite3';
import { IUser } from '../../../shared/interfaces/IUser';

const db = new sqlite3.Database('./code_challenge.db');

export const createUserRep = async ({username, password}: IUser): Promise<any>  =>{
    return new Promise(async (resolve: Function, reject: Function) => {
        
        db.run(`INSERT INTO Users(username, password) VALUES(?,?)`, [`${username}`, `${password}`], function(err) {
            if (err) {
                console.log(err.message)
                return resolve(false)
            }
          
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            return resolve(true);
        });
    });
}


export const searchUserRep = async ({username, password}: IUser): Promise<any>  => {
    return new Promise(async (resolve: Function, reject: Function) => {
        
        db.all( `SELECT rowid FROM Users WHERE username=? AND password=?`, [`${username}`, `${password}`], function (err:any, rows:any) {
            if(!err) {
                rows.length ? resolve(rows[0]) : resolve([])
            }
            else console.log(err)
        });

    });
}
