const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from tipoproducto',(err,tipoproducto) =>{
            if(err){
                res.json(err);
            }
            res.json(tipoproducto);
        });

    });

};

controller.edit = (req, res) => {

    const {idtpprod}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from tipoproducto where idtpprod=?', [idtpprod], (err,clientes) => {
            res.json(idtpprods[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,tipoproducto)=> {
       conn.query('insert into tipoproducto set?', [data], (err,tipoproducto) => {
        res.json(tipoproducto);
       });
   })
};

controller.update = (req,res) =>{

    const {idtpprods}= req.params;
    const nuevo_tipoproducto = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipoproducto set ? where idtpprods =?', [nuevo_tipoproducto, idtpprods], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtpprods}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from tipoproducto where idtpprods =?', [idtpprods], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};


module.exports =controller;