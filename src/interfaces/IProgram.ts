export interface IEpg {
    entry:    Entry;
    response: Response;
    status:   string;
    msg:      string;
}

export interface Entry {
    device_id:           string;
    device_category:     string;
    device_model:        string;
    device_type:         string;
    device_so:           string;
    format:              string;
    device_manufacturer: string;
    authpn:              string;
    authpt:              string;
    api_version:         string;
    region:              string;
    HKS:                 string;
    user_id:             string;
    date_from:           string;
    date_to:             string;
    quantity:            string;
}

export interface Response {
    channels: Channel[];
    total:    number;
}

export interface Channel {
    id:                     string;
    number:                 string;
    name:                   string;
    hd:                     boolean;
    image:                  string;
    group_id:               string;
    liveref:                string;
    epg_url:                EpgURL;
    provider_metadata_id:   number;
    provider_metadata_name: ProviderMetadataName;
    group:                  Group;
    events:                 Event[];
}

export enum EpgURL {
    EpgURLTv = "tv",
    Tv = "TV",
}

export interface Event {
    channel_id:               string;
    id:                       string;
    name:                     Name;
    description:              null;
    talent:                   null;
    date_begin:               string | Date;
    date_end:                 string | Date;
    unix_begin:               number;
    unix_end:                 number;
    duration:                 string;
    language:                 null;
    type:                     null;
    group_id:                 null;
    confirmado:               null;
    id_empleado:              null;
    tms_id:                   null;
    event_alf_id:             null;
    ext_ncont_id:             null;
    ext_nevt_id:              null;
    ext_actors:               null;
    ext_director:             null;
    ext_year:                 null;
    ext_country:              null;
    ext_original_name:        null;
    ext_ep_original_name:     null;
    ext_series_id:            null;
    ext_season_id:            null;
    ext_episode_id:           null;
    ext_language:             null;
    ext_serie_short_desc:     null;
    ext_serie_desc:           null;
    image_base_horizontal:    string;
    image_base_vertical:      string;
    image_base_square:        string;
    ext_eventimage_name:      string;
    ext_eventimage_name_base: string;
    ext_catchup:              null;
    ext_startover:            null;
    ext_recordable:           null;
    parental_rating:          null;
    aud_stereo:               null;
    aud_dolby:                null;
    vid_black_and_white:      null;
    dvb_content:              null;
    user_content:             null;
    group_rel:                null;
    gmt:                      number;
}
export enum Name {
    Na = "NA",
}
export enum ProveedorCode {
    Amco = "amco",
    Atresplayer = "atresplayer",
    Cvperu = "cvperu",
    Hbo = "hbo",
    Paramount = "paramount",
}

export enum ProveedorName {
    Amco = "AMCO",
    Atresplayer = "ATRESPLAYER",
    ClaroVideoPeru = "CLARO VIDEO PERU",
    Hbo = "HBO",
    Paramount = "PARAMOUNT",
}

export enum RatingCode {
    G = "G",
}

export enum ProviderMetadataName {
    Nagra = "NAGRA",
}
export interface Group {
    common: Common;
}
export interface Common {
    id:                     string;
    title:                  string;
    title_episode:          null;
    title_uri:              string;
    title_original:         string;
    description:            string;
    description_large:      string;
    short_description:      null;
    image_large:            string;
    image_medium:           string;
    image_small:            string;
    image_still:            null;
    image_background:       string;
    url_imagen_t1:          string;
    url_imagen_t2:          string;
    image_base_horizontal:  string;
    image_base_vertical:    string;
    image_base_square:      string;
    image_clean_horizontal: string;
    image_clean_vertical:   string;
    image_clean_square:     string;
    image_sprites:          string;
    image_frames:           string;
    image_trickplay:        string;
    image_external:         null;
    duration:               null;
    date:                   string;
    year:                   null;
    preview:                string;
    season_number:          null;
    episode_number:         null;
    format_types:           FormatTypes;
    live_enabled:           string;
    live_type:              string;
    live_ref:               string;
    timeshift:              null | string;
    votes_average:          number;
    rating_code:            RatingCode;
    proveedor_name:         ProveedorName;
    proveedor_code:         ProveedorCode;
    encoder_tecnology:      Nology;
    recorder_technology:    Nology;
    resource_name:          null;
    rollingcreditstime:     null;
    rollingcreditstimedb:   null;
    is_series:              boolean;
    channel_number:         string;
}
export interface Nology {
    id:   null | string;
    desc: Desc | null;
}
export enum FormatTypes {
    Free = "free",
    Susc = "susc",
}
export enum Desc {
    HarmonicVos = "HARMONIC_VOS",
}