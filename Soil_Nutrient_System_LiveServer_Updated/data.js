const SOILNUTRI_DATA = {
  farmers: [
    {
      id:"F001", name:"Lakshmi", phone:"9876543210", aadhaar:"123456789012", email:"farmer@soilnutri.demo",
      village:"Lakshmi Nagar", district:"Hyderabad", state:"Telangana", land:"4.5 acres",
      soil:"Loamy Soil", irrigation:"Drip Irrigation", joined:"12 June 2026",
      crops:[
        {name:"Onion", area:"0.75 acres", stage:"Bulb Development", health:"Healthy", season:"Rabi", icon:"🧅", status:"Good"},
        {name:"Rice", area:"2 acres", stage:"Flowering", health:"Healthy", season:"Kharif", icon:"🌾", status:"Good"},
        {name:"Tomato", area:"1 acre", stage:"Fruit Development", health:"Needs Monitoring", season:"Rabi", icon:"🍅", status:"Monitor"},
        {name:"Cotton", area:"1.5 acres", stage:"Vegetative", health:"Healthy", season:"Kharif", icon:"🌿", status:"Good"}
      ],
      alerts:[
        {type:"Weather", text:"Rain is expected. Check drainage around the rice field.", icon:"🌦️"},
        {type:"Crop", text:"Tomato field should be inspected for leaf spots.", icon:"🔎"},
        {type:"Irrigation", text:"Cotton irrigation is due tomorrow morning.", icon:"💧"}
      ]
    },
    {
      id:"F002", name:"Sita Devi", phone:"9123456780", aadhaar:"234567890123", email:"sita@soilnutri.demo",
      village:"Green Valley", district:"Warangal", state:"Telangana", land:"3 acres",
      soil:"Red Loamy Soil", irrigation:"Sprinkler", joined:"20 May 2026",
      crops:[
        {name:"Maize", area:"1.5 acres", stage:"Vegetative", health:"Healthy", season:"Kharif", icon:"🌽", status:"Good"},
        {name:"Chilli", area:"1.5 acres", stage:"Flowering", health:"Healthy", season:"Rabi", icon:"🌶️", status:"Good"}
      ],
      alerts:[{type:"Task",text:"Apply the planned nutrient schedule after checking soil moisture.",icon:"📋"}]
    }
  ],
  admins:[
    {email:"admin@soilnutri.demo",password:"Admin@123",name:"SoilNutri AI Administrator"},
    {email:"manager@soilnutri.demo",password:"Manager@123",name:"Soil Operations Manager"}
  ]
};

function findFarmer(method,value){
  const v=(value||"").replace(/\s/g,"").toLowerCase();
  return SOILNUTRI_DATA.farmers.find(f=>{
    if(method==="phone") return f.phone===v;
    if(method==="aadhaar") return f.aadhaar===v;
    if(method==="email") return f.email.toLowerCase()===v;
    return false;
  });
}
function saveCurrentFarmer(f){ localStorage.setItem("soilnutriFarmer",JSON.stringify(f)); }
function getCurrentFarmer(){ try{return JSON.parse(localStorage.getItem("soilnutriFarmer")||"null")}catch(e){return null} }
function saveAdmin(a){localStorage.setItem("soilnutriAdmin",JSON.stringify(a));}
function getAdmin(){try{return JSON.parse(localStorage.getItem("soilnutriAdmin")||"null")}catch(e){return null}}
