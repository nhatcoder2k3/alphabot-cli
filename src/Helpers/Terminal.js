/**
 * @author      Nhatcoder2k3
 * @version     1.0.0
 * @homeurl     https://github.com/nhatcoder2k3/alphabot-cli
 * @author_url     https://www.facebook.com/vuminhnhat10092003
 */ 
 /**
  * Vietnamese:
  *- Vui lòng không xóa dòng này
  *- Đây là động lực giúp tôi cung cấp nhưng sản miễn phí và chất lượng tới cộng đồng
  *- Bất kỳ hành động sửa đổi nào sẽ ảnh hưởng tới mã nguồn hoặc dẫn tới bạn bị cấm sử dụng tiện ích dòng lệnh của alphabot
  *- Bản quyền © 2023 Nhatcoder2k3
  * -----------------------------------
  * English: 
  *- Please do not delete this line 
  *- This is my motivation to provide free and quality products to the community 
  *- Any modification will affect the source code or lead to you being banned from using the alphabot command line utility
  *- Copyright © 2023 Nhatcoder2k3
  */
const chalk = require('chalk');

module.exports = (data,options) => {
  switch(options){
    case "warn":
      console.log(chalk.bold.hex("#E6A845").bold("[WARNING] »") + data);
    break;
    
    case "error":
      console.log(chalk.bold.hex("#5C1414").bold("[ERROR] »") + data);
    break;
    
    case "success":
      console.log(chalk.bold.hex("#E6A845").bold('[SUCCESS] »' ) + data)
    break;
  }
}