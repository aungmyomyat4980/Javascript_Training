let person = [
  {
    user_name: "Htet Myat",

    user_name_last: "Aung",

    email: "htetmyataung@gmail.com",

    user_level: "super admin",

    del_flg: "0",
  },

  {
    user_name: "Kay Zin",

    user_name_last: "Paing",

    email: "pkmalay331997@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Hay Mar",

    user_name_last: "Aung",

    email: "haymaraung@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Min Thant",

    user_name_last: "Mg",

    email: "minthant180@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Thandar",

    user_name_last: "Lin",

    email: "thandarlin@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Aung Myo",

    user_name_last: "Myat",

    email: "aungmyomyat@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Aung Pyae",

    user_name_last: "Win",

    email: "aungpyaewin@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Naing Lin",

    user_name_last: "Thant",

    email: "nainglinthant@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Soe Sandar",

    user_name_last: "Myint",

    email: "soesandarmyint@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Thiri Shwe",

    user_name_last: "Sin",

    email: "thirishwesin@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Nan Myat Yadanar",

    user_name_last: "Phyo",

    email: "nanmyatyadanarphyo@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Myo Nandar",

    user_name_last: "Kyaw",

    email: "myonandarkyaw@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Kyaw Zaw",

    user_name_last: "Hein",

    email: "kyawzawhein@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Myat Kaung",

    user_name_last: "Khant",

    email: "myatkaungkhant@gmail.com",

    user_level: "admin",

    del_flg: "0",
  },

  {
    user_name: "Aye Aye",

    user_name_last: "Kaing",

    email: "ayeayekhaing@gmail.com",

    user_level: "super admin",

    del_flg: "0",
  },

  {
    user_name: "Myint Myint",

    user_name_last: "Thi",

    email: "myintmyintthi@gmail.com",

    user_level: "member",

    del_flg: "0",
  },
];

let result = person.filter((user)=>{
    return user.user_level== "member"
})

console.table(result)

