export interface FrequentlyAskedQuestions {
	question: string,
	answer?: string,
}

export enum Type {
	DEPARTMENT_IN = "Department In",
	INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
	type: Type,
	placeId: string,
}

export interface Interval {
	start?: any,
	end?: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export enum Type_1 {
	POSTAL_CODE = "Postal Code",
	REGION = "State/Region",
	COUNTY = "County",
	CITY = "City",
	SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
	name?: string,
	type?: Type_1,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export enum Type_2 {
	FELLOWSHIP = "Fellowship",
	RESIDENCY = "Residency",
	INTERNSHIP = "Internship",
	MEDICAL_SCHOOL = "Medical School",
}

export interface EducationList {
	type: Type_2,
	institutionName: string,
	yearCompleted: number,
}

export enum Type_3 {
	NONE = "None",
	BOOK_NOW = "Book Now",
	CALL_NOW = "Call Now",
	CONTACT_US = "Contact Us",
	SEND_MESSAGE = "Send Message",
	USE_APP = "Use App",
	PLAY_GAME = "Play Game",
	SHOP_NOW = "Shop Now",
	SIGN_UP = "Sign Up",
	WATCH_VIDEO = "Watch Video",
	SEND_EMAIL = "Send Email",
	LEARN_MORE = "Learn More",
	PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
	ORDER_NOW = "Order Now",
	FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
	type: Type_3,
	value?: string,
}

export interface FeaturedMessage {
	description?: string,
	url?: string,
}

export enum Gender {
	UNSPECIFIED = "Unspecified",
	FEMALE = "Female",
	MALE = "Male",
}

export enum Degrees {
	ANP = "Adult Nurse Practitioner (ANP)",
	APN = "Advanced Practice Nurse (APN)",
	APRN = "Advanced Practice Registered Nurse (APRN)",
	ARNP = "Advanced Registered Nurse Practitioner (ARNP)",
	AUD = "Audiologist (AUD)",
	BSW = "Bachelors of Social Work (BSW)",
	CCCA = "Certificate of Clinical Competence in Audiology (CCCA)",
	CNM = "Certified Nurse Midwife (CNM)",
	CNP = "Certified Nurse Practitioner (CNP)",
	CNS = "Clinical Nurse Specialist (CNS)",
	CPNP = "Certified Pediatric Nurse Practitioner (CPNP)",
	CRNA = "Certified Registered Nurse Anesthetist (CRNA)",
	CRNP = "Certified Registered Nurse Practitioner (CRNP)",
	DC = "Doctor of Chiropractic (DC)",
	DDS = "Doctor of Dental Surgery (DDS)",
	DMD = "Doctor of Dental Medicine (DMD)",
	DNP = "Doctor of Nursing Practice (DNP)",
	DO = "Doctor of Osteopathy (DO)",
	DPM = "Doctor of Podiatric Medicine (DPM)",
	DSW = "Doctorate Social Work (DSW)",
	DVM = "Doctor of Veterinary Medicine (DVM)",
	FNP = "Family Nurse Practitioner (FNP)",
	GNP = "Geriatric Nurse Practitioner (GNP)",
	LAC = "Licensed Acupuncturist (LAC)",
	LCSW = "Licensed Social Worker (LCSW)",
	LPN = "Licensed Practical Nurse (LPN)",
	MBA = "Master of Business Administration (MBA)",
	MBBS = "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
	MD = "Medical Doctor (MD)",
	MPH = "Master of Public Health (MPH)",
	MSW = "Master Social Work (MSW)",
	ND = "Naturopathic Doctor (ND)",
	NNP = "Neonatal Nurse Practitioner (NNP)",
	NP = "Nurse Practitioner (NP)",
	OD = "Doctor of Optometry (OD)",
	PA = "Physician Assistant (PA)",
	PAC = "Physician Assistant Certified (PAC)",
	PHARMD = "Doctor of Pharmacy (PHARMD)",
	PHD = "Doctor of Philosophy (PHD)",
	PNP = "Pediatric Nurse Practitioner (PNP)",
	PSYD = "Doctor of Psychology (PSYD)",
	RD = "Registered Dietician (RD)",
	RSW = "Registered Social Worker (RSW)",
	VMD = "Veterinary Medical Doctor (VMD)",
	WHNP = "Womens Health Nurse Practitioner (WHNP)",
}

export enum LocationType {
	LOCATION = "Location",
	HEALTHCARE_FACILITY = "Healthcare Facility",
	HEALTHCARE_PROFESSIONAL = "Healthcare Professional",
	ATM = "ATM",
	RESTAURANT = "Restaurant",
	HOTEL = "Hotel",
}

export interface MenuUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface OrderUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export enum PaymentOptions {
	ALIPAY = "AliPay",
	AMERICANEXPRESS = "American Express",
	ANDROIDPAY = "Google Pay",
	APPLEPAY = "Apple Pay",
	ATM = "ATM",
	ATMQUICK = "ATM Quick",
	BACS = "BACS",
	BANCONTACT = "Bancontact",
	BANKDEPOSIT = "Bank Deposit",
	BGO = "Bank/Giro Overschrijving",
	BITCOIN = "Bitcoin",
	Bar = "Bargeld",
	CARTASI = "CartaSi",
	CASH = "Cash",
	CCS = "CCS",
	CHECK = "Check",
	CONB = "Contactloos betalen",
	CVVV = "Cadeaubon/VVV bon",
	DEBITNOTE = "Debit Note",
	DINERSCLUB = "Diners Club",
	DIRECTDEBIT = "Direct Debit",
	DISCOVER = "Discover",
	ECKARTE = "Girokarte",
	ECOCHEQUE = "EcoCheque",
	EKENA = "E-kena",
	EMV = "Elektronische Maaltijdcheques",
	FINANCING = "Financing",
	GOPAY = "GoPay",
	HEBAG = "He-Bag",
	IBOD = "iBOD",
	ICCARDS = "IC Cards",
	ID = "iD",
	IDEAL = "iDeal",
	INCA = "Incasso",
	INVOICE = "Invoice",
	JCB = "JCB",
	JCoinPay = "J−Coin Pay",
	JKOPAY = "JKO Pay",
	KLA = "Klantenkaart",
	KLARNA = "Klarna",
	LINEPAY = "LINE Pay",
	MAESTRO = "Maestro",
	MASTERCARD = "MasterCard",
	MIPAY = "Mi Pay",
	MONIZZE = "Monizze",
	Manuelle_Lastsch = "Manuelle Lastschrift",
	Merpay = "メルPay",
	NANACO = "nanaco",
	NEXI = "Nexi",
	OREM = "Onder Rembours",
	PAYBACKPAY = "Payback Pay",
	PAYBOX = "Paybox",
	PAYCONIQ = "Payconiq",
	PAYPAL = "PayPal",
	PAYPAY = "PayPay",
	PAYSEC = "PaySec",
	POSTEPAY = "Postepay",
	QRCODE = "QR Code Payment",
	QUICPAY = "QUICPay",
	RAKUTENEDY = "Rakuten Edy",
	RakutenPay = "楽天Pay",
	SAMSUNGPAY = "Samsung Pay",
	SODEXO = "Sodexo",
	SWISH = "Swish",
	TEST = "Test",
	TEST_2 = "rajeev",
	TICKETRESTAURANT = "Ticket Restaurant",
	TRAVELERSCHECK = "Traveler's Check",
	TWINT = "Twint",
	UNIONPAY = "China UnionPay",
	VEV = "Via een verzekering",
	VISA = "Visa",
	VISAELECTRON = "Visa Electron",
	VOB = "Vooruit betalen",
	VOUCHER = "Voucher",
	VPAY = "V PAY",
	WAON = "WAON",
	WECHATPAY = "WeChat Pay",
	WIRETRANSFER = "Wire Transfer",
	YuchoPay = "ゆうちょPay",
	AuPay = "auPay",
	DBarai = "d払い",
	Überweisung = "Banküberweisung",
}

export enum PriceRange {
	UNSPECIFIED = "Unspecified",
	ONE = "$",
	TWO = "$$",
	THREE = "$$$",
	FOUR = "$$$$",
}

export interface RankTrackingCompetitors {
	name: string,
	website: string,
}

export enum RankTrackingFrequency {
	WEEKLY = "Weekly",
	MONTHLY = "Monthly",
	QUARTERLY = "Quarterly",
}

export enum RankTrackingKeywords {
	NAME = "Name",
	PRIMARY_CATEGORY = "Primary Category",
	SECONDARY_CATEGORY = "Secondary Category",
}

export enum RankTrackingQueryTemplates {
	KEYWORD = "Keyword",
	KEYWORD_ZIP = "Keyword Zip",
	KEYWORD_CITY = "Keyword City",
	KEYWORD_IN_CITY = "Keyword in City",
	KEYWORD_NEAR_ME = "Keyword near me",
	KEYWORD_CITY_STATE = "Keyword City State",
}

export enum RankTrackingSites {
	GOOGLE_DESKTOP = "Google Desktop",
	GOOGLE_MOBILE = "Google Mobile",
	BING_DESKTOP = "Bing Desktop",
	BING_MOBILE = "Bing Mobile",
	YAHOO_DESKTOP = "Yahoo Desktop",
	YAHOO_MOBILE = "Yahoo Mobile",
}

export interface ReservationUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ServiceArea {
	places?: string[],
}

export enum Presentation {
	BUTTON = "Button",
	LINK = "Link",
}

export interface UberLink {
	text?: string,
	presentation: Presentation,
}

export interface UberTripBranding {
	text: string,
	url: string,
	description: string,
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
}

export interface HealthcareProfessional {
	questionsAndAnswers?: boolean,
	covid19InformationUrl?: string,
	covidMessaging?: string,
	facebookAbout?: string,
	frequentlyAskedQuestions?: FrequentlyAskedQuestions[],
	geomodifier?: string,
	googleEntityRelationship?: GoogleEntityRelationship,
	googleMyBusinessLabels?: string[],
	googlePlaceId?: string,
	googleShortName?: string,
	holidayHoursConversationEnabled?: boolean,
	impressum?: string,
	landingPageUrl?: string,
	linkedInUrl?: string,
	neighborhood?: string,
	nudgeEnabled?: boolean,
	onlineServiceHours?: Hours,
	primaryConversationContact?: any,
	reviewResponseConversationEnabled?: boolean,
	serviceAreaPlaces?: ServiceAreaPlaces[],
	slug?: string,
	telehealthUrl?: string,
	what3WordsAddress?: string,
	yelpLinkedAccount?: any,
	acceptingNewPatients?: boolean,
	additionalHoursText?: string,
	address: Address,
	addressHidden?: boolean,
	alternatePhone?: any,
	associations?: string[],
	brands?: string[],
	description?: string,
	hours?: Hours,
	logo?: ComplexImage,
	name: string,
	categories?: any,
	certifications?: string[],
	cityCoordinate?: Coordinate,
	closed?: boolean,
	clusterIndex?: number,
	conditionsTreated?: string[],
	c_speciality?: EntityReference[],
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	educationList?: EducationList[],
	emails?: string[],
	facebookOverrideCity?: string,
	facebookCoverPhoto?: Image,
	facebookCallToAction?: FacebookCallToAction,
	facebookDescriptor?: string,
	facebookEmail?: string,
	facebookLinkedAccount?: any,
	facebookName?: string,
	facebookPageUrl?: string,
	facebookParentPageId?: string,
	facebookProfilePhoto?: Image,
	facebookStoreId?: string,
	facebookVanityUrl?: string,
	fax?: any,
	featuredMessage?: FeaturedMessage,
	firstName?: string,
	foursquareLinkedAccount?: any,
	photoGallery?: ComplexImage[],
	gender?: Gender,
	geocodedCoordinate?: Coordinate,
	gmbLinkedAccount?: any,
	googleAccountId?: string,
	googleAttributes?: any,
	googleCoverPhoto?: Image,
	googleProfilePhoto?: Image,
	headshot?: Image,
	admittingHospitals?: string[],
	// yext_CONDITIONS TREATED?: string[],
	degrees?: Degrees[],
	insuranceAccepted?: string[],
	instagramHandle?: string,
	isClusterPrimary?: boolean,
	isoRegionCode?: string,
	keywords?: string[],
	languages?: string[],
	lastName?: string,
	localPhone?: any,
	locationType?: LocationType,
	mainPhone?: any,
	menuUrl?: MenuUrl,
	middleName?: string,
	mobilePhone?: any,
	npi?: string,
	officeName?: string,
	orderUrl?: OrderUrl,
	paymentOptions?: PaymentOptions[],
	phones?: any,
	pickupCoordinate?: Coordinate,
	priceRange?: PriceRange,
	alternateNames?: string[],
	alternateWebsites?: string[],
	rankTrackingCompetitors?: RankTrackingCompetitors[],
	customKeywords?: string[],
	rankTrackingEnabled?: boolean,
	rankTrackingFrequency?: RankTrackingFrequency,
	rankTrackingKeywords?: RankTrackingKeywords[],
	rankTrackingQueryTemplates?: RankTrackingQueryTemplates[],
	rankTrackingSites?: RankTrackingSites[],
	reservationUrl?: ReservationUrl,
	routableCoordinate?: Coordinate,
	serviceArea?: ServiceArea,
	services?: string[],
	shortName35?: string,
	shortName64?: string,
	id: string,
	timezone?: any,
	tollFreePhone?: any,
	ttyPhone?: any,
	twitterHandle?: string,
	uberClientId?: string,
	uberLink?: UberLink,
	uberTripBranding?: UberTripBranding,
	walkableCoordinate?: Coordinate,
	websiteUrl?: WebsiteUrl,
	yearEstablished?: number,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
	videos?: ComplexVideo[],
}
