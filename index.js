#!/usr/bin/env node
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
const minimist = require('minimist');
const semver = require('semver');
const pkgDir = require('pkg-dir');
global.Logo = require('./src/Helpers/Logo.js');
const Terminal = require('./src/Helpers/Terminal.js');
global.CLI = require('./src/CLI');
const argv = minimist(process.argv.slice(2));

//Stop editing the update server path now
//If you still want to get the lates version of our Alphabot-cli
const url_update = 'https://raw.githubusercontent.com/nhatcoder2k3/alphabot-cli/main/package.json';

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
  const packages = JSON.parse(readFileSync('./package.json'));
  if(semver['lt'](packages.version,res['data']['version'])) {
    
  }
});

//Logo call function display

//Const variables alert

//Starting Application ALPHABOT CLI
(async () => {

  let notFound = true;
  global.alphabotDir = await pkgDir(process.cwd());
  for(const name in global.CLI) {
    const {command,params,Nhatcoder} = global.CLI[name];
    const method = argv._[0];
    try {
     
      if(command.includes(method)) {
        //global.Logo();
        await Nhatcoder(argv);
        notFound = false;
      }else{
        //global.Logo();
        for(param in argv) {
          if(param == '_') continue;
          if(params.includes(param)) {
            await Nhatcoder(argv);
            notFound = false;
          }
        }
      }
    }catch(e) {
      Terminal(e,'error');
      process.exit();
    }
  }
  if(notFound) global.CLI.help.Nhatcoder();
})();