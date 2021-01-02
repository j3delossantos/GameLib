import { request, Request, Response} from 'express';

import pool from '../database';

class GamesController{
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response){
       // res.json({text: 'This is the game  id: '+ req.params.id});
       const id = req.params.id;
        await pool.query('Select * from games where id = ?', [id], function(err, result, fields) {
            if (err){
               throw err;   
            }
            if (result.length > 0) {
                res.json(result[0]);
            }
            else{
                res.status(404).json({text: "Game not found"})
            }               
            
            
            //res.json({text:'Game Found'})
            //res.json({message: 'Game Saved'});
    });  
      

    }

    public async create (req: Request, res: Response){
        await pool.query('INSERT INTO games set ?', [req.body], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            //res.json({message: 'Game Saved'});
        });          
    }

    public async update (req: Request, res: Response){
        //res.json({text: 'Updating the game id: '+ req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE games set ? WHERE id =?',[req.body, id], function(err, result, fields){
            if (err){
                throw(err);
            }
            else{                
                res.json({text:"The game was updated"});
            }
        });
    }

    public async delete (req: Request, res: Response){
        const id = req.params.id;
        await pool.query('delete from games where id = ?', [id], function(err, result, fields) {
            if (err){
                res.status(404).json({text: "Game not found"})
               throw err;   
            }
            else{
                res.json({text:"The game was deleted"});
            }               
            
            
            //res.json({text:'Game Found'})
            //res.json({message: 'Game Saved'});
    });  
    }  


}

 const gamesController = new GamesController();
 export default gamesController;
 
