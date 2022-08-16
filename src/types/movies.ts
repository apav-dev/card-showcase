export interface EntityReference {
  entityId: string;
  name: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Movie {
  description?: string;
  name: string;
  c_actors?: EntityReference[];
  c_genres?: string[];
  c_poster?: ComplexImage;
  c_rating?: string;
  c_runtime?: number;
  c_tagline?: string;
  id: string;
}
