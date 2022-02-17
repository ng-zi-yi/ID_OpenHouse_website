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
//Home Page
document.getElementsById("quiz-btn").addEventListener("click", Quiz1Page);

//School Pages
document.getElementById("CBP").addEventListener("click", CBPPage);
document.getElementById("ACC").addEventListener("click", ACCPage);
document.getElementsById("BF").addEventListener("click", BFPage);
document.getElementsById("BS").addEventListener("click", BSPage);
document.getElementsById("ITB").addEventListener("click", ITBPage);
document.getElementsById("TRM").addEventListener("click", TRMPage);
document.getElementsById("DES").addEventListener("click", DESPage);
document.getElementsById("HLFM").addEventListener("click", HLFMPage);
document.getElementsById("CEP").addEventListener("click", CEPPage);
document.getElementsById("AEG").addEventListener("click", AEGPage);
document.getElementsById("AMS").addEventListener("click", AMSPage);
document.getElementsById("BME").addEventListener("click", BMEPage);
document.getElementsById("EE").addEventListener("click", EEPage);
document.getElementsById("ECE").addEventListener("click", ECEPage);
document.getElementsById("ES").addEventListener("click", ESPage);
document.getElementsById("MOT").addEventListener("click", MOTPage);
document.getElementsById("ME").addEventListener("click", MEPage);
document.getElementsById("FSV").addEventListener("click", FSVPage);
document.getElementsById("MCM").addEventListener("click", MCMPage);
document.getElementsById("MPP").addEventListener("click", MPPPage);
document.getElementsById("NSG").addEventListener("click", NSGPage);
document.getElementsById("OPT").addEventListener("click", OPTPage);
document.getElementsById("ABM").addEventListener("click", ABMPage);
document.getElementsById("CMC").addEventListener("click", CMCPage);
document.getElementsById("CHS").addEventListener("click", CHSPage);
document.getElementsById("CDT").addEventListener("click", CDTPage);
document.getElementsById("ECDE").addEventListener("click", ECDEPage);
document.getElementsById("TSE").addEventListener("click", TSEPage);
document.getElementsById("CICTP").addEventListener("click", CICTPPage);
document.getElementsById("CSF").addEventListener("click", CSFPage);
document.getElementsById("DS").addEventListener("click", DSPage);
document.getElementsById("IM").addEventListener("click", IMPage);
document.getElementsById("IT").addEventListener("click", ITPage);
document.getElementsById("BMS").addEventListener("click", BMSPage);
document.getElementsById("PHARM").addEventListener("click", PHARMPage);
document.getElementsById("EWT").addEventListener("click", EWTPage);
document.getElementsById("LDH").addEventListener("click", LDHPage);
document.getElementsById("CBE").addEventListener("click", CBEPage);

let schoolsrc;

//Home Page
function Quiz1Page() {
    schoolsrc = window.open("loading.html", "_self");
    setTimeout("GoURL('quiz1.html')", 1000);
}

//School Pages
function CBPPage() {
    schoolsrc = window.open("loading.html", "_blank");
    setTimeout("GoURL('https://www.np.edu.sg/ba/Pages/cbp.aspx')", 1000);
}
function ACCPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ACC)", 1000);
}
function BFPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(BF)", 1000);
}
function BSPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(BS)", 1000);
}
function ITBPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ITB)", 1000);
}
function TRMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(TRM)", 1000);
}
function DESPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(DES)", 1000);
}
function HLFMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(HLFM)", 1000);
}
function CEPPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CEP)", 1000);
}
function AEGPage () {
    schoolsrc = LoadPage();
    setTimeout("GoURL(AEG)", 1000);
}
function AMSPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(AMS)", 1000);
}
function CBPPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CBP)", 1000);
}
function BMEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(BME)", 1000);
}
function EEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(EE)", 1000);
}
function ECEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ECE)", 1000);
}
function ESPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ES)", 1000);
}
function MOTPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(MOT)", 1000);
}
function MEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ME)", 1000);
}
function FSVPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(FSV)", 1000);
}
function MCMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(MCM)", 1000);
}
function CBPPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CBP)", 1000);
}
function MPPPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(MPP)", 1000);
}
function NSGPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(NSG)", 1000);
}
function OPTPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(OPT)", 1000);
}
function ABMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ABM)", 1000);
}
function CMCPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CMC)", 1000);
}
function CHSPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CHS)", 1000);
}
function CDTPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CDT)", 1000);
}
function ECDEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(ECDE)", 1000);
}
function TSEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(TSE)", 1000);
}
function CICTPPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CICTP)", 1000);
}
function CSFPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CSF)", 1000);
}
function NSGPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(NSG)", 1000);
}
function DSPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(DS)", 1000);
}
function IMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(IM)", 1000);
}
function ITPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(IT)", 1000);
}
function BMSPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(BMS)", 1000);
}
function PHARMPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(PHARM)", 1000);
}
function EWTPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(EWT)", 1000);
}
function LDHPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(LDH)", 1000);
}
function CBEPage() {
    schoolsrc = LoadPage();
    setTimeout("GoURL(CBE)", 1000);
}

function LoadPage() {
    window.open("loading.html", "_blank");
}

function GoURL(Url) {
    schoolsrc.location = Url;
}