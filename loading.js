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

/*Execution Done*/
let schoolsrc;
//Home Page

//School Pages
document.getElementById("CBP").addEventListener("click", CBPPage);
function CBPPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL('https://www.np.edu.sg/ba/Pages/cbp.aspx')", 1000);
}

document.getElementById("ACC").addEventListener("click", ACCPage);
function ACCPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ACC)", 1000);
}

document.getElementsById("BF").addEventListener("click", BFPage);
function BFPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(BF)", 1000);
}

document.getElementsById("BS").addEventListener("click", BSPage);
function BSPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(BS)", 1000);
}

document.getElementsById("ITB").addEventListener("click", ITBPage);
function ITBPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ITB)", 1000);
}

document.getElementsById("TRM").addEventListener("click", TRMPage);
function TRMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(TRM)", 1000);
}

document.getElementsById("DES").addEventListener("click", DESPage);
function DESPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(DES)", 1000);
}

document.getElementsById("HLFM").addEventListener("click", HLFMPage);
function HLFMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(HLFM)", 1000);
}

document.getElementsById("CEP").addEventListener("click", CEPPage);
function CEPPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CEP)", 1000);
}

document.getElementsById("AEG").addEventListener("click", AEGPage);
function AEGPage () {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(AEG)", 1000);
}

document.getElementsById("AMS").addEventListener("click", AMSPage);
function AMSPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(AMS)", 1000);
}

document.getElementsById("BME").addEventListener("click", BMEPage);
function BMEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(BME)", 1000);
}

document.getElementsById("EE").addEventListener("click", EEPage);
function EEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(EE)", 1000);
}

document.getElementsById("ECE").addEventListener("click", ECEPage);
function ECEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ECE)", 1000);
}

document.getElementsById("ES").addEventListener("click", ESPage);
function ESPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ES)", 1000);
}

document.getElementsById("MOT").addEventListener("click", MOTPage);
function MOTPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(MOT)", 1000);
}

document.getElementsById("ME").addEventListener("click", MEPage);
function MEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ME)", 1000);
}

document.getElementsById("FSV").addEventListener("click", FSVPage);
function FSVPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(FSV)", 1000);
}

document.getElementsById("MCM").addEventListener("click", MCMPage);
function MCMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(MCM)", 1000);
}

document.getElementsById("MPP").addEventListener("click", MPPPage);
function MPPPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(MPP)", 1000);
}

document.getElementsById("NSG").addEventListener("click", NSGPage);
function NSGPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(NSG)", 1000);
}

document.getElementsById("OPT").addEventListener("click", OPTPage);
function OPTPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(OPT)", 1000);
}

document.getElementsById("ABM").addEventListener("click", ABMPage);
function ABMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ABM)", 1000);
}
document.getElementsById("CMC").addEventListener("click", CMCPage);
function CMCPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CMC)", 1000);
}

document.getElementsById("CHS").addEventListener("click", CHSPage);
function CHSPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CHS)", 1000);
}

document.getElementsById("CDT").addEventListener("click", CDTPage);
function CDTPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CDT)", 1000);
}

document.getElementsById("ECDE").addEventListener("click", ECDEPage);
function ECDEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(ECDE)", 1000);
}

document.getElementsById("TSE").addEventListener("click", TSEPage);
function TSEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(TSE)", 1000);
}

document.getElementsById("CICTP").addEventListener("click", CICTPPage);
function CICTPPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CICTP)", 1000);
}

document.getElementsById("CSF").addEventListener("click", CSFPage);
function CSFPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CSF)", 1000);
}

document.getElementsById("DS").addEventListener("click", DSPage);
function DSPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(DS)", 1000);
}

document.getElementsById("IM").addEventListener("click", IMPage);
function IMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(IM)", 1000);
}

document.getElementsById("IT").addEventListener("click", ITPage);
function ITPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(IT)", 1000);
}
document.getElementsById("BMS").addEventListener("click", BMSPage);
function BMSPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(BMS)", 1000);
}

document.getElementsById("PHARM").addEventListener("click", PHARMPage);
function PHARMPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(PHARM)", 1000);
}

document.getElementsById("EWT").addEventListener("click", EWTPage);
function EWTPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(EWT)", 1000);
}
document.getElementsById("LDH").addEventListener("click", LDHPage);
function LDHPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(LDH)", 1000);
}

document.getElementsById("CBE").addEventListener("click", CBEPage);
function CBEPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL(CBE)", 1000);
}

function GoURL(Url) {
    schoolsrc.location = Url;
}