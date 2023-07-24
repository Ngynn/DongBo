const { rejects } = require("assert");
const { error } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wait = async function (second) {
  let wait = new Promise(async (resolover, reject) => {
    setTimeout(() => {
      resolover();
    }, second * 1000);
  });
  return wait;
};

async function typeName() {
  console.log("Nhập tên");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      res();
    });
  });
  return temp;
}

async function typeAge() {
  console.log("Nhập tuổi");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      res();
    });
  });
  return temp;
}

let tien = 0;

async function typeSize() {
  console.log("Nhập size");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      if (input == "S" || input == "s") {
        tien = 121000;
        console.log("Bạn đã chọn size S");
      } else if (input == "M" || input == "m") {
        tien = 237000;
        console.log("Bạn đã chọn size M");
      } else if (input == "L" || input == "l") {
        tien = 1810000;
        console.log("Bạn đã chọn size L");
      }
      res();
    });
  });
  return temp;
}



async function askMom() {
  console.log("Nhập tiền xin má");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      if (input < tien) {
        rej();
      } else {
        res();
      }
    });
  });
  return temp;
}








async function buyMarterial() {
  console.log("Đi mua nguyên liệu");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Đi mua về rồi");
    resolover();
  });
}

async function prepare() {
  console.log("Sơ chế");
  console.log("1. Nhờ má lột vỏ tôm");
  console.log("2. Nhờ ba rửa giá");
  console.log("3. Xào thịt!!!");
  await wait(5);
  let temp = new Promise((resolover, reject) => {
    console.log("Sơ chế đã xong");
    resolover();
  });
}

async function cook() {
  console.log("Phải tự mình Làm bột bánh| Luộc tôm | Xào thịt bằm | Làm đậu");

  async function doFlavor() {
    console.log("Làm bột bánh");
    await wait(3);
    let temp = new Promise((resolover, reject) => {
      console.log("Làm bột bánh xong rồi ");
      resolover();
    });
    return temp;
  }
  async function boilShrimp() {
    console.log("Luộc tôm");
    await wait(4);
    let temp = new Promise((resolover, reject) => {
      console.log("Luộc tôm xong ");
      resolover();
    });
    return temp;
  }
  async function fryMeat() {
    console.log("Xào thịt bằm");
    await wait(5);
    let temp = new Promise((resolover, reject) => {
      console.log("Xào thịt bằm xong ");
      resolover();
    });
    return temp;
  }
  async function doBean() {
    console.log("Làm đậu");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Làm đậu xong");
      resolover();
    });
    return temp;
  }
  await Promise.all([doFlavor(), boilShrimp(), fryMeat(), doBean()]);
}


async function fallFlavor() {
  console.log("Đổ hỗn hợp vào chảo");
  await wait(1);
  let temp = new Promise((resolover, reject) => {
    console.log("Đã đổ xong ");
    resolover();
  });
}
async function friedCake() {
  console.log("Chiên bánh xèo èo èo èo èo");
  await wait(4);
  let temp = new Promise((resolover, reject) => {
    console.log("Chiên bánh xèo èo èo èo èo xong ");
    resolover();
  });
}

async function doSauce() {
  console.log("Pha nước mém");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Nước mém  xem ");
    resolover();
  });
}

async function preLast() {
  console.log("Vừa dọn ra dĩa với dọn rau lun !!");

  async function preToDish() {
    console.log("Dọn ra dĩa");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Dọn ra dĩa xong ");
      resolover();
    });
    return temp;
  }
  async function preVeg() {
    console.log("Dọn rau");
    await wait(1);
    let temp = new Promise((resolover, reject) => {
      console.log("Dọn rau xong ");
      resolover();
    });
    return temp;
  }
  await Promise.all([preToDish(), preVeg]);

}




async function main() {
  // await typeName();
  // await typeAge();
  await typeSize();
  await askMom().then(async () => {
    await buyMarterial();
    await prepare();
    await cook();
    await fallFlavor();
    await friedCake();
    await doSauce();
    await preLast();
    console.log("Quất thoi oi oi oi oi !!!!");
  }).catch(async () => {
    console.log("Xủi");
  });
}

main();