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
 const Terminal = require('../Helpers/Terminal.js');
 const { version } = require('../../package.json');
 module.exports = {
   command:[],
   params:['version','v'],
   description: 'Kiểm tra phiên bản của Alphabot cli',
   Nhatcoder: async () => {
     console.log(`Phiên bản hiện tại là: `+version);
     
   }
 }