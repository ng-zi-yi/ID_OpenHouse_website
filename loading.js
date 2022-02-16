/*BA Courses*/
const CBP = "https://www.np.edu.sg/ba/Pages/cbp.aspx"
const ACC = "https://www.np.edu.sg/ba/Pages/acc.aspx"
const BF = "https://www.np.edu.sg/ba/Pages/bf.aspx"
const BS = "https://www.np.edu.sg/ba/Pages/bs.aspx"
const ITB = "https://www.np.edu.sg/ba/Pages/itb.aspx"
const TRM = "https://www.np.edu.sg/ba/Pages/trm.aspx"

/*DE Courses*/
const DES = "https://www.np.edu.sg/de/Pages/des.aspx"
const HLFM = "https://www.np.edu.sg/de/Pages/hlfm.aspx"
const REB = "https://www.np.edu.sg/de/Pages/reb.aspx"

/*SOE Courses*/
const CEP = "https://www.np.edu.sg/soe/Pages/cep.aspx"
const AEG = "https://www.np.edu.sg/soe/Pages/aeg.aspx"
const AMS = "https://www.np.edu.sg/soe/Pages/ams.aspx"
const BME = "https://www.np.edu.sg/soe/Pages/bme.aspx"
const EE = "https://www.np.edu.sg/soe/Pages/ee.aspx"
const ECE = "https://www.np.edu.sg/soe/Pages/ece.aspx"
const ES = "https://www.np.edu.sg/soe/Pages/es.aspx"
const MOT = "https://www.np.edu.sg/soe/Pages/mot.aspx"
const ME = "https://www.np.edu.sg/soe/Pages/me.aspx"

/*FMS Courses*/
const FSV = "https://www.np.edu.sg/fms/Pages/fsv.aspx"
const MCM = "https://www.np.edu.sg/fms/Pages/mcm.aspx"
const MPP = "https://www.np.edu.sg/fms/Pages/mpp.aspx"

/*HS Courses*/
const NSG = "https://www.np.edu.sg/hs/Pages/nsg.aspx"
const OPT = "https://www.np.edu.sg/hs/Pages/opt.aspx"

/*HMS Courses*/
const ABM = "https://www.np.edu.sg/hms/Pages/abm.aspx"
const CMC = "https://www.np.edu.sg/hms/Pages/cmc.aspx"
const CHS = "https://www.np.edu.sg/hms/Pages/chs.aspx"
const CDT = "https://www.np.edu.sg/hms/Pages/cdt.aspx"
const ECDE = "https://www.np.edu.sg/hms/Pages/ecde.aspx"
const TSE = "https://www.np.edu.sg/hms/Pages/tse.aspx"

/*ICT Courses*/
const CICTP = "https://www.np.edu.sg/ict/Pages/cictp.aspx"
const CSF = "https://www.np.edu.sg/ict/Pages/csf.aspx"
const DS = "https://www.np.edu.sg/ict/Pages/ds.aspx"
const IM = "https://www.np.edu.sg/ict/Pages/im.aspx"
const IT = "https://www.np.edu.sg/ict/Pages/it.aspx"

/*LSCT Courses*/
const BMS = "https://www.np.edu.sg/lsct/Pages/bms.aspx"
const PHARM = "https://www.np.edu.sg/lsct/Pages/pharm.aspx"
const EWT = "https://www.np.edu.sg/lsct/Pages/ewt.aspx"
const LDH = "https://www.np.edu.sg/lsct/Pages/ldh.aspx"
const CBE = "https://www.np.edu.sg/lsct/Pages/cbe.aspx"

$(".ba-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".de-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".fms-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".hms-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".hs-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".ict-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".lsct-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})
$(".soe-dip-btn").on("clicked", function (e) {
    location.href='loading.html';
    setTimeout(loading, 1000);

})

let courseBtn = document.getElementsById().onclick;

function source (){
    if(courseBtn == "CBP"){
        return CBP;
    }
    else if(courseBtn == "ACC"){
        return ACC;
    }
    else if(courseBtn == "BF"){
        return BF;
    }
    else if(courseBtn == "BS"){
        return BS;
    }
    else if(courseBtn == "ITB"){
        return ITB;
    }
    else if(courseBtn == "TRM"){
        return TRM;
    }
    else if(courseBtn == "DES"){
        return DES;
    }
    else if(courseBtn == "HLFM"){
        return HLFM;
    }
    else if(courseBtn == "REB"){
        return REB;
    }
    else if(courseBtn == "CEP"){
        return CEP;
    }
    else if(courseBtn == "AEG"){
        return AEG;
    }
    else if(courseBtn == "AMS"){
        return AMS;
    }
    else if(courseBtn == "BME"){
        return BME;
    }
    else if(courseBtn == "EE"){
        return EE;
    }
    else if(courseBtn == "ECE"){
        return ECE;
    }
    else if(courseBtn == "ES"){
        return ES;
    }
    else if(courseBtn == "MOT"){
        return MOT;
    }
    else if(courseBtn == "ME"){
        return ME;
    }
    else if(courseBtn == "FSV"){
        return FSV;
    }
    else if(courseBtn == "MCM"){
        return MCM;
    }
    else if(courseBtn == "MPP"){
        return MPP;
    }
    else if(courseBtn == "NSG"){
        return NSG;
    }
    else if(courseBtn == "OPT"){
        return OPT;
    }
    else if(courseBtn == "ABM"){
        return ABM;
    }
    else if(courseBtn == "CMC"){
        return CMC;
    }
    else if(courseBtn == "CHS"){
        return CHS;
    }
    else if(courseBtn == "CDT"){
        return CDT;
    }
    else if(courseBtn == "ECDE"){
        return ECDE;
    }
    else if(courseBtn == "TSE"){
        return TSE;
    }
    else if(courseBtn == "CICTP"){
        return CICTP;
    }
    else if(courseBtn == "CSF"){
        return CSF;
    }
    else if(courseBtn == "DS"){
        return DS;
    }
    else if(courseBtn == "IM"){
        return IM;
    }
    else if(courseBtn == "IT"){
        return IT;
    }
    else if(courseBtn == "BMS"){
        return BMS;
    }
    else if(courseBtn == "PHARM"){
        return PHARM;
    }
    else if(courseBtn == "EWT"){
        return EWT
    }
    else if(courseBtn == "LDH"){
        return LDH;
    }
    else if(courseBtn == "CBE"){
        return CBE;
    }
}

function loading (){
    window.location.href = source();
}
