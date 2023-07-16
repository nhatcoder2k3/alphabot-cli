
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
  
const {spawn} = require('child_process');
const axios = require('axios');
const {readFileSync} = require('fs-extra');


//Stop editing the update server path now
//If you still want to get the lates version of our Alphabot-cli
const url_update = 'https://www.github.com/nhatcoder2k3/alphabot-cli/main/package.json';

//Strating Tool
function StartingCLI() {
  const child = spawn('node',['--trace-warnings','--async-stack-traces','./src/Nhatcoder2k3.js'],{
    cwd:__dirname,
    stdio:'inherit',
    shell:true
  });
}

//Update reminder notification when new version is available 
axios.get(url_update).then((res) => {
  const packagesdata = JSON.parse(readFileSync('./package.json'));
  if(packagesdata.version != res.data.version) {
    Console.log('Hiện tại đã có phiên bản mới tốt hơn');
  }else{
    console.log('GOOD VERSION');
  }
});

//Starting function callback
StartingCLI();