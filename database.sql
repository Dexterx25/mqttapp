CREATE TABLE users(
  id varchar PRIMARY KEY not null,
  email varchar not null default '',
  encrypted_password varchar not null default '',
  reset_password_token varchar,
  reset_password_sent_at TIMESTAMP,
  remember_created_at TIMESTAMP, 
  first_name varchar,
  last_name varchar,
  full_name varchar,
  datebirthday varchar,
  avatar varchar,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  recovery_pin varchar,
  country_code integer,
  phone_number varchar,
  facebook_avatar varchar,
  time_zone varchar,
  unseen_notifications integer default 0,
  language integer default 0
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE users_id_seq OWNED BY users.id;
ALTER TABLE users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);

CREATE INDEX "index_users_on_email" on users(email);
CREATE UNIQUE INDEX "index_users_on_reset_password_token" on users(reset_password_token);

 alter table users  add constraint UQ_users_email  unique (email);


--CREATE devices TABLE:
CREATE TABLE devices(
    id varchar PRIMARY KEY not null,
    token varchar not null,
    identifier varchar not null,
    os integer not null,
    player_id varchar,
    user_id varchar,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(user_id) 
      REFERENCES users(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON devices
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE devices_id_seq OWNED BY devices.id;
ALTER TABLE devices ALTER COLUMN id SET DEFAULT nextval('devices_id_seq'::regclass);

CREATE INDEX "index_devices_on_player_id" on devices(player_id);
CREATE INDEX "index_devices_on_user_id" on devices(user_id);
alter table devices  add constraint UQ_devices_player_id  unique (player_id);



CREATE table dhts(
    id varchar PRIMARY KEY not null
    user_id varchar,
    name varchar not null,
    description varchar not null,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id)
        REFERENCES users(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON dhts
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE dhts_id_seq OWNED BY dhts.id;
ALTER TABLE dhts ALTER COLUMN id SET DEFAULT nextval('dhts_id_seq'::regclass);

CREATE INDEX "index_dhts_on_name" on devices(name);
CREATE INDEX "index_dhts_on_user_id" on devices(user_id);


CREATE table dhttelemetries(
  id varchar PRIMARY KEY not null,
  humedaty varchar,
  dht_id  varchar,
  temperature varchar,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(dht_id)
        REFERENCES dhts(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON dhttelemetries
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE dhttelemetries_id_seq OWNED BY dhttelemetries.id;
ALTER TABLE dhttelemetries ALTER COLUMN id SET DEFAULT nextval('dhttelemetries_id_seq'::regclass);

CREATE INDEX "index_devices_on_dhts_id" on dhttelemetries(dht_id);


CREATE table gpss(
    id varchar PRIMARY KEY not null,
    name varchar not null,
    user_id varchar,
    description varchar,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        FOREIGN KEY(user_id)
            REFERENCES users(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON gpss
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE gpss_id_seq OWNED BY gpss.id;
ALTER TABLE gpss ALTER COLUMN id SET DEFAULT nextval('gpss_id_seq'::regclass);

CREATE INDEX "index_gpss_on_users_id" on gpss(user_id);


CREATE tables gpscordenaties(
  id varchar PRIMARY KEY not null,
  gps_id varchar not null,
  latitude varchar,
  longitude varchar,
  FOREIGN KEY (gps_id)
    REFERENCES id(gpss)
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON gpscordenaties
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE gpscordenaties_id_seq OWNED BY gpscordenaties.id;
ALTER TABLE gpscordenaties ALTER COLUMN id SET DEFAULT nextval('gpscordenaties_id_seq'::regclass);

CREATE INDEX "index_gpscordenaties_on_gpss_id" on gpscordenaties(gps_id);



CREATE table leds(
id varchar PRIMARY KEY not null,
name varchar not null,
user_id varchar,
state boolean default false,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
 FOREIGN KEY(user_id)
    REFERENCES users(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON leds
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE SEQUENCE leds_id_seq OWNED BY leds.id;
ALTER TABLE leds ALTER COLUMN id SET DEFAULT nextval('leds_id_seq'::regclass);

CREATE INDEX "index_leds_on_users_id" on leds(users_id);

CREATE TABLE admins(
  id varchar PRIMARY KEY not null,
  email varchar not null default '',
  encrypted_password varchar not null default '',
  reset_password_token varchar,
  reset_password_sent_at TIMESTAMP,
  remember_created_at TIMESTAMP, 
  first_name varchar,
  last_name varchar,
  full_name varchar,
  datebirthday varchar,
  avatar varchar,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  recovery_pin varchar,
  country_code integer,
  phone_number varchar,
  facebook_avatar varchar,
  time_zone varchar,
  unseen_notifications integer default 0,
  language integer default 0
);
CREATE TABLE codeadmins(
   id varchar PRIMARY KEY not null,
   code varchar,
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

);