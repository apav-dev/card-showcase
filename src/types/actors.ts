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

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_actor {
	name: string,
	c_bio?: string,
	c_birthDate?: string,
	c_birthplace?: string,
	c_headshot?: ComplexImage,
	c_height?: string,
	c_movies?: EntityReference[],
	id: string,
}
