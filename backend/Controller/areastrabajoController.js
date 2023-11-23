const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from areastrabajo',(err,areastrabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(areastrabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idarea}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from areastrabajo where idarea=?', [idarea], (err,areastrabajo) => {
            res.json(areastrabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,areastrabajo)=> {
       conn.query('insert into areastrabajo set?', [data], (err,areastrabajo) => {
        res.json(areastrabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idarea}= req.params;
    const nuevo_areastrabajo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update areastrabajo set ? where idarea =?', [nuevo_areastrabajo, idarea], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idarea}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from areastrabajo where idarea =?', [idarea], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};


module.exports =controller;