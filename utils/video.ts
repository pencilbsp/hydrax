export interface Source {
    label: string;
    res_id: number;
    size: number;
    codec: string;
    status: boolean;
    type: string;
}

export interface VideoObject {
    width: string;
    height: string;
    preload: string;
    fullscreenOrientationLock: string;
    pipIcon: string;
    sources: Source[];
    id: string;
    slug: string;
    md5_id: number;
    user_id: string;
    domain: string;
    image?: string | null;
    ads: {
        pop: string[];
    };
    tracker?: { url?: string };
}

export class SimpleVideo {
    constructor(
        public slug: string,
        public md5_id: number,
        public label: string,
        public size: number,
    ) {
        this.slug = slug;
        this.md5_id = md5_id;
        this.label = label;
        this.size = size;
    }

    static fromVideoObject(video: VideoObject, resolution: string): SimpleVideo {
        const source = video.sources.find((source) => source.label === resolution);

        if (!source) {
            throw new Error(`Source with label ${resolution} not found`);
        }

        return new SimpleVideo(video.slug, video.md5_id, source.label, source.size);
    }
}
