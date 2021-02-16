BEGIN;

-- USER

CREATE SEQUENCE user_seq START 1000000;
CREATE TABLE public.user
(
    user_id           BIGINT PRIMARY KEY DEFAULT nextval('user_seq'),
    user_login        TEXT UNIQUE,
    user_password     TEXT,
    registration_date TIMESTAMP
);


-- SECURITY

-- SYSTEM DOMAIN

CREATE SEQUENCE system_permission_type_seq START 1000000;
CREATE TABLE public.system_permission_type
(
    system_permission_type_id BIGINT PRIMARY KEY DEFAULT nextval('system_permission_type_seq'),
    type_name                 TEXT NOT NULL UNIQUE
);

CREATE SEQUENCE system_group_type_seq START 1000000;
CREATE TABLE public.system_group_type
(
    system_group_type_id BIGINT PRIMARY KEY DEFAULT nextval('system_group_type_seq'),
    type_name            TEXT NOT NULL UNIQUE
);

CREATE SEQUENCE system_group_seq START 1000000;
CREATE TABLE public.system_group
(
    system_group_id      BIGINT PRIMARY KEY DEFAULT nextval('system_group_seq'),
    system_group_type_id BIGINT NOT NULL REFERENCES public.system_group_type ON DELETE CASCADE ON UPDATE CASCADE UNIQUE
);

CREATE TABLE public.system_group_permission
(
    system_group_id           BIGINT NOT NULL REFERENCES public.system_group,
    system_permission_type_id BIGINT NOT NULL REFERENCES public.system_permission_type,

    UNIQUE (system_group_id, system_permission_type_id)
);

CREATE TABLE public.system_group_user
(
    system_group_id BIGINT NOT NULL REFERENCES public.system_group,
    user_id         BIGINT NOT NULL REFERENCES public.user
);


INSERT INTO public.system_group_type (system_group_type_id, type_name) VALUES (1, 'SYSTEM_ADMIN');
INSERT INTO public.system_group_type (system_group_type_id, type_name) VALUES (2, 'SYSTEM_USER');
INSERT INTO public.system_group_type (system_group_type_id, type_name) VALUES (3, 'SYSTEM_COMPANY');

INSERT INTO public.system_group (system_group_id, system_group_type_id) VALUES (1, 1);
INSERT INTO public.system_group (system_group_id, system_group_type_id) VALUES (2, 2);
INSERT INTO public.system_group (system_group_id, system_group_type_id) VALUES (3, 3);

--CREATE ADMIN

INSERT INTO public.user (user_id, user_login, user_password, registration_date)
VALUES (1, 'admin', 'admin', CURRENT_TIMESTAMP);
INSERT INTO public.system_group_user (system_group_id, user_id) VALUES (1, 1);

COMMIT;
