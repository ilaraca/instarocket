const multer = require('multer');
const path = require('path');

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function(req, file, callback){
      callback(null, file.originalname);
    }
  })
}

// a biblioteca path - biblioteca nativa do node que é usada para lidar com caminhos
// formatando os caminhos da maneira correta entre ambientes windows e unix

// existe várias estratégias para armazenamento de arquivos, o diskStorage é usado
// para salvar as imagens dentro do projeto, ou seja, localmente.
