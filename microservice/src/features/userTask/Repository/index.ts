import sqlite3 from'sqlite3';
import { IProject } from '../../../shared/interfaces/IProject';

const db = new sqlite3.Database('./code_challenge.db');

export const createProjectRep = async ({name}: IProject): Promise<any>  =>{
    return new Promise(async (resolve: Function, reject: Function) => {
        
        db.run(`INSERT INTO Project(name) VALUES(?)`, [`${name}`], function(err) {
            if (err) {
                console.log(err.message)
                return reject(err.message)
            }
          
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            return resolve({projectId: this.lastID});
        });

    });
}

export const getProjectRep = async ({id}: IProject): Promise<any>  => {
    return new Promise(async (resolve: Function, reject: Function) => {
        
        db.all(`SELECT rowid, * FROM Project WHERE id=?`, [`${id}`], function (err:any, rows:any) {
            if(!err) {
                rows.length ? resolve(rows[0]) : resolve([])
            }
            else console.log(err)
        });

    });
}

export const deleteProjectRep = async ({id}: IProject): Promise<any>  => {
    return new Promise(async (resolve: Function, reject: Function) => {
        
        db.run(`DELETE FROM Project WHERE id=?`, [`${id}`], function (err:any) {
            if(!err) {
                return resolve({deleted: true})
            }
            else {
                console.log(err)
                reject(err) 
            } 
        });

    });
}