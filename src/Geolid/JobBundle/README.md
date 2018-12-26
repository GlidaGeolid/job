Geolid Jobs
===========

[Jobs]: http://fr.geolid.jobs/

[Introduction]: #markdown-header-1-introduction
[Todo]: #markdown-header-2-todo
[Deploy in development]: #markdown-header-deploy-in-development
[Deploy in production]: #markdown-header-deploy-in-production

Table of contents

1. [Introduction]
2. [Todo]
3. [Deploy in development]
4. [Deploy in production]
5. [Traduction]
5. [TODO](#todo)

0. Install prod
---------------

Root
    yum install git
    curl -sS https://getcomposer.org/installer | php
    mv composer.phar /usr/local/bin/composer
    yum install php-intl
    wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm && rpm -Uvh epel-release-latest-6.noarch.rpm
    wget http://rpms.famillecollet.com/enterprise/remi-release-6.rpm && rpm -Uvh remi-release-6*.rpm
    yum --enablerepo=remi-php56,remi upgrade php\*
    chown apache:psacln /var/lib/php/session/
    chmod 770 /var/lib/php/session/
    chcon system_u:object_r:httpd_sys_content_t:s0 /var/lib/php/session/
Plesk
    Activer la mise à jour automatique de plesk
    Création abonnement geolid.jobs
    Ajout alias de domaine fr.geolid.jobs et désactiver HTTP 301
    Ajout alias de domaine de.geolid.jobs et désactiver HTTP 301
    Document root geolid.jobs/web
    Version PHP 5.6.13
    Ajout accès ssh
Connexion ssh
    git clone git@github.com:Geolid/geolid.jobs.git
    cd geolid.jobs/web
    cp htaccess-prod .htaccess
    cd ..
    composer install
    php app/console assets:install web/ --symlink
    php app/console cache:clear --env=prod --no-debug
    php app/console cache:warmup --env=prod --no-debug
    php app/console assetic:dump --env=prod --no-debug


1. Introduction
---------------

2. Todo
-------

### Faire un bundle GeolidCoreBundle.

Mettre toutes les extensions DQL de beberlei/DoctrineExtensions.

Dependance, j'aimerais envlever sonata admin bundle, mais y'a des dépendances dans block bundle peut-être,
réessayer plus tard.



Y'a un pb paske

    geolid_job.domain: jobs.kim.o
    geolid_job.geolid: 'http://www.geolid-glanchow.local'

y'en a un ou y'a http pas l'autre.
mais on peut pas changer sans vérifier, notamment parce que
pour les emails notifications faut absolument le http:// devant, mais pour le locale listener il le faut pas, etc


Que les sites correspondent à la table International, notamment avec le menu.

Table statuts contient des infos similaires au jobs et postes, mais les id ne correspondent pas.

De plus, qui gère cette table ?

Are Offer::* in the right Entity ?
Sendgrid, faire des vérifications comme dans php/admin/class/sendgrid/sendgrid.class.php

Install server
--------------

New 2015-04-02 kim + boris, allemagne et refonte etape1

```
alter table rh_candidats add certificates varchar(255) after lettre_motivation;
alter table job_job add country varchar(2) after id;
update job_job set country = 'fr';
alter table recrutement add country varchar(2) after id;
update recrutement set country = 'fr';
alter table agences add country varchar(2) after id;
update agences set country = 'fr';
insert into agences (country, nom, url) values('de', 'Berlin', 'berlin');
```
vérifier la collation de country en utf8_unicode_ci
recrutement
    Ajout de id_secteur
    Ajout de id_job

Job_job
    Ajout de id_sector

Ajout de la table job_sector
INSERT INTO `job_sector` VALUES ('1', 'Administratif et Finance');
INSERT INTO `job_sector` VALUES ('2', 'RH');
INSERT INTO `job_sector` VALUES ('3', 'Commercial');
INSERT INTO `job_sector` VALUES ('4', 'Relation Clients');
INSERT INTO `job_sector` VALUES ('5', 'Marketing');
INSERT INTO `job_sector` VALUES ('6', 'Production et Innovation');


UPDATE recrutement
SET id_secteur = CASE
WHEN secteur = "commercial"     THEN 3
WHEN secteur = "marketing"     THEN 5
WHEN secteur = "technique"     THEN 6
WHEN secteur = "Administratif et RH"     THEN 1
END

# Rajouter un case pour le poste assistante commerciale de gestion.

# 2 tables différentes
UPDATE rh_candidats/recrutement SET id_job = 
CASE id_poste 
    WHEN 15 THEN 20
    WHEN 13 THEN 22
    WHEN 3 THEN 2
    WHEN 2 THEN 13
    WHEN 24 THEN 14
    WHEN 1 THEN 27 
    WHEN 23 THEN 26
    WHEN 10 OR 11 OR 20 THEN 17
    WHEN 12 THEN 18
    WHEN 16 THEN 15
    WHEN 33 THEN 16
    WHEN 14 OR 8 THEN 7
    WHEN 9 OR 5 THEN 10
    WHEN 26 OR 7 OR 4 THEN 9
    WHEN 6 THEN 11
    WHEN 32 THEN 30
    WHEN 22 THEN 32
    WHEN 18 OR 30 THEN 36
    WHEN 17 THEN 37
    WHEN 37 OR 38 OR 40 OR 41 OR 29 OR 36 OR 43 THEN 38    
    WHEN 34 OR 35 OR 31 OR 42 THEN 39
    WHEN 39 THEN 40
    WHEN 27 THEN 41
    WHEN 28 THEN 42
    ELSE 0    
END 

après on peut remove la colonne id_poste ?

UPDATE job_job SET 
sector_id = 
CASE category_id
WHEN 9 THEN 1
WHEN 10 THEN 2
WHEN 1 THEN 3
WHEN 3 THEN 4
WHEN 7 THEN 5
ELSE 6
END









Create a special user with limited rights.

```mysql
create user geolid_jobs identified by 'eEoYRoz<]ezyR1zO';
use geolid;
grant select on recrutement to geolid_jobs;
grant select on job_category to geolid_jobs;
grant select on job_testimonial to geolid_jobs;
grant select on job_job to geolid_jobs;
grant select on job_international to geolid_jobs;
grant select,insert,update,delete on rh_candidats to geolid_jobs;
grant select,insert on rh_referer to geolid_jobs;
grant select on agences to geolid_jobs;
create or replace view comptes_geolid_jobs_view as
        select id, nom, prenom, email, type
        from comptes
        where type != 'client'
;
grant select on comptes_geolid_jobs_view to geolid_jobs;
grant select on vitrine_news to geolid_jobs;
```

Mysql modifications for jobs.

```sql
ALTER TABLE recrutement
    ADD content longtext DEFAULT NULL AFTER zone,
    ADD created datetime DEFAULT NULL,
    ADD updated datetime DEFAULT NULL,
    ADD status varchar(255) DEFAULT NULL,
    ADD status_changed datetime DEFAULT NULL
;

UPDATE recrutement SET content = CONCAT('<h2>Qui sommes nous</h2><p><b>GEOLID</b> con&ccedil;oit et commercialise des solutions de communication web to store <b>g&eacute;olocalis&eacute;es</b> pour les <b>artisans, commer&ccedil;ants et PME.</b> Nous sommes partenaires de <b>Google</b> et du r&eacute;seau Proxistore f&eacute;d&eacute;rant les plus grands &eacute;diteurs de presse fran&ccedil;ais (L\'Equipe.fr, 20 Minutes.fr, les magazines des Groupes l\'Express et Marie Claire, LeMonde.fr, etc.). <b>GEOLID</b>, c\'est aujourd\'hui : <b>7M&euro; CA, 3000 clients, 8 agences, 120 salari&eacute;s</b> et un taux de satisfaction clients tr&egrave;s sup&eacute;rieur &agrave; la profession.</p><h2>Description du poste</h2><p>', responsabilites, '</p><h2>Votre profil</h2><p>', profil, '</p><h2>Nous vous offrons</h2><p>', renumeration,'</p>');

CREATE TABLE IF NOT EXISTS job_category (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  created datetime DEFAULT NULL,
  updated datetime DEFAULT NULL,
  status varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  status_changed datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

INSERT INTO job_category (id, name, created, updated, status, status_changed) VALUES
(1, 'Vente', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(2, 'Téléprospection', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(3, 'Service client', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(4, 'Gestion de projets', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(5, 'Créa et édito', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(6, 'Traffic Management', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(7, 'Fonction marketing', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(8, 'R&D', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(9, 'Administration', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04'),
(10, 'Ressources humaines', '2014-06-04 12:25:04', '2014-06-04 12:25:04', 'published', '2014-06-04 12:25:04');

CREATE TABLE IF NOT EXISTS job_testimonial (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  quote longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  photo varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  orientation varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  created datetime DEFAULT NULL,
  updated datetime DEFAULT NULL,
  status varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  status_changed datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

INSERT INTO job_testimonial (title, quote, photo, orientation, created, updated, status, status_changed) VALUES
('Gautier Président', '<p>Bonjour je m&rsquo;appelle Gautier et je suis Pr&eacute;sident chez Geolid.</p>\r\n\r\n<p>&nbsp;</p>\r\n', 'gautier-president.jpg', 'right', '2014-06-11 16:26:55', '2014-06-11 16:26:55', 'published', '2014-06-11 16:26:55'),
('Marion Traffic Manager', '<p>Bonjour, je m&rsquo;appelle Marion et je suis Traffic Manager chez Geolid.</p>\r\n', 'marion-hp-testimony.jpg', 'left', '2014-06-09 16:27:00', '2014-06-09 16:27:00', 'published', '2014-06-09 16:27:00'),
('Mickael Responsable Relation Client', '<p>Bonjour, je m&#39;appelle Mickael et je suis Responsable Relation Client chez Geolid.</p>\r\n', 'micka-hp-testimony.jpg', 'right', '2014-06-09 16:27:55', '2014-06-09 16:27:55', 'published', '2014-06-09 16:27:55'),
('Jonathan Stagiaire Communication', '<p>Bonjour, je m&rsquo;appelle Jonathan et je suis stagiaire en communication chez Geolid.</p>\r\n', 'jonathan-stagiaire-communication.jpg', 'right', '2014-06-09 16:19:02', '2014-06-09 16:19:02', 'published', '2014-06-09 16:19:02'),
('Julie Responsable Marketing Operationnel', '<p>Bonjour, je m&rsquo;appelle Julie et je suis responsable marketing operationnel chez Geolid.</p>\r\n', 'julie-responsable-marketing-operationnel.jpg', 'left', '2014-06-09 16:25:47', '2014-06-09 16:25:47', 'published', '2014-06-09 16:25:47'),
('Mathilde Stagiaire Marketing', '<p>Bonjour, je m&rsquo;appelle Mathilde et je suis Stagiaire Marketing chez Geolid.</p>\r\n', 'mathilde-stagiaire-marketing.jpg', 'left', '2014-06-09 16:29:06', '2014-06-09 16:29:06', 'published', '2014-06-09 16:29:06'),
('Morgane chargée de trade marketing', '<p>Bonjour, je m&rsquo;appelle Morgane et je suis charg&eacute; de trade marketing chez Geolid.</p>\r\n', 'morgane-charge-de-trade-marketing.jpg', 'right', '2014-06-09 16:31:25', '2014-06-09 16:31:25', 'published', '2014-06-09 16:31:25'),
('Regis', '<p>Bonjour, je m&rsquo;appelle Regis et je travail chez Geolid.</p>\r\n', 'regis-hp-testimony.jpg', 'left', '2014-06-10 14:55:07', '2014-06-10 14:55:07', 'published', '2014-06-10 14:55:07'),
('Gautier Président UK', '<h2>A word from our president</h2>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\r\n<p>Gautier, President</p>\r\n', 'gautier-president.jpg', 'right', '2014-06-16 11:09:52', '2014-06-16 11:09:52', 'published', '2014-06-16 11:09:52');

CREATE TABLE IF NOT EXISTS job_job (
  id int(11) NOT NULL AUTO_INCREMENT,
  category_id int(11) DEFAULT NULL,
  slug varchar(255) COLLATE utf8_unicode_ci UNIQUE DEFAULT NULL,
  title varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  baseline longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  content longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  starred int(11) DEFAULT NULL,
  created datetime DEFAULT NULL,
  updated datetime DEFAULT NULL,
  status varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  status_changed datetime DEFAULT NULL,
  testimonial1_id int(11) DEFAULT NULL,
  testimonial2_id int(11) DEFAULT NULL,
  testimonial3_id int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES job_category(id),
  FOREIGN KEY (testimonial1_id) REFERENCES job_testimonial(id),
  FOREIGN KEY (testimonial2_id) REFERENCES job_testimonial(id),
  FOREIGN KEY (testimonial3_id) REFERENCES job_testimonial(id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

INSERT INTO job_job (id, category_id, slug, title, baseline, content, starred, created, updated, status, status_changed) VALUES
(1, 7, 'charge-de-trade-marketing', 'Chargé de Trade Marketing', 'Nous sommes passionnés par la satisfaction de nos clients', '<p>La division Marketing pr&eacute;sente nos produits et services au monde entier. Nos &eacute;quipes sont r&eacute;parties dans toutes les divisions de l&#39;entreprise.e</p>\r\n\r\n<p>Nous &eacute;valuons les opportunit&eacute;s de march&eacute;, repr&eacute;sentons les pr&eacute;f&eacute;rences et priorit&eacute;s des clients et partenaires, d&eacute;finissons des propositions de valeurs et produisons des programmes marketing int&eacute;gr&eacute;s.</p>\r\n\r\n<h3>Vos missions</h3>\r\n\r\n<ol>\r\n	<li>Fournir aux commerciaux les outils indispensables d&rsquo;aide &agrave; la vente</li>\r\n	<li>Assurer la circulation des best practices</li>\r\n	<li>Assurer la g&eacute;n&eacute;ration de leads aux commerciaux</li>\r\n	<li>Autres projets</li>\r\n</ol>\r\n', 0, '2014-06-09 16:34:25', '2014-06-09 16:34:25', 'published', '2014-06-09 16:34:25'),
(2, 1, 'commercial', 'Commercial', 'Nous ciblons votre besoin', '<p>&Ecirc;tre commercial c&rsquo;est trop cool.<br />\r\n&nbsp;</p>\r\n', 1, '2014-06-09 15:21:21', '2014-06-09 15:21:21', 'published', '2014-06-09 15:21:21');

CREATE TABLE IF NOT EXISTS job_international (
  id int(11) NOT NULL AUTO_INCREMENT,
  country varchar(255) COLLATE utf8_unicode_ci UNIQUE NOT NULL,
  config longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

INSERT INTO job_international (id, country, config) VALUES
(1, 'fr', '{"advice":{"overview":"<p>Pour chaque candidat, une candidature est un premier pas dans l&rsquo;entreprise, un entretien de s&eacute;lection r&eacute;ussi un second pas, etc. etc.<\\/p>\\r\\n\\r\\n<p>Pour notre responsable du recrutement et tous les collaborateurs qui participent au recrutement, une candidature bien cibl&eacute;e sur nos besoins et nos m&eacute;tiers, un parcours professionnel bien r&eacute;sum&eacute; et fiable, et une argumentation claire et pertinente, c&rsquo;est du plaisir et de l&rsquo;efficacit&eacute; pour tous.<\\/p>\\r\\n\\r\\n<p>Vous souhaitez candidater chez Geolid pour une offre d&rsquo;emploi ou de stage ? Voici comment se d&eacute;roule un recrutement et quels sont nos conseils aux candidats.<\\/p>\\r\\n","process":"<p>&laquo; Nous appliquons au recrutement les 3 valeurs fondatrices de Geolid : le professionnalisme, la simplicit&eacute; et le plaisir. &raquo;<\\/p>\\r\\n\\r\\n<ol>\\r\\n\\t<li>Apr&egrave;s une premi&egrave;re s&eacute;lection des CV, notre responsable recrutement r&eacute;alise un entretien t&eacute;l&eacute;phonique pour recueillir et donner des informations compl&eacute;mentaires : parcours, motivations, r&eacute;num&eacute;ration, disponibilit&eacute;, poste, contexte, etc.<\\/li>\\r\\n\\t<li>Selon les postes, le candidat aura ensuite 2 &agrave; 3 entretiens d&rsquo;environ 1h30 avec le responsable de l&rsquo;activit&eacute;, des experts du domaine m&eacute;tier, et un membre du comit&eacute; de direction.<\\/li>\\r\\n\\t<li>Les entretiens sont compl&eacute;t&eacute;s par des tests techniques et de personallit&eacute; qui font aussi l&rsquo;objet d&rsquo;un &eacute;change lors des entretiens.<\\/li>\\r\\n\\t<li>La d&eacute;cisions de recrutement est prise en &eacute;quipe sous la responsabilit&eacute; du manager de l&rsquo;&eacute;quipe.<\\/li>\\r\\n<\\/ol>\\r\\n\\r\\n<p>Nous sommes attentifs &agrave; apporter une r&eacute;ponse &agrave; chaque candidat par &eacute;crit ou par t&eacute;l&eacute;phone.<\\/p>\\r\\n\\r\\n<p>Nous consid&eacute;rons que les diff&eacute;rents entretiens doivent aussi permettre au candidat de bien nous conna&icirc;tre, de comprendre son r&ocirc;le et ses missions, et ed valider sa motivation pour le poste et pour Geolid.<\\/p>\\r\\n","advice":"<p>Nous mobilisons tous les canaux de recrutement pour aller &agrave; la rencontre de nos futurs collaborateurs.<\\/p>\\r\\n"},"enterprise":[],"home":{"testimonial1_id":"3","testimonial2_id":"2","testimonial3_id":"5"},"trainee":{"content":"<p>Faire un stage chez Geolid, c&#39;est &ecirc;tre pleinement engag&eacute; dans ses missions et engranger une exp&eacute;rience r&eacute;ellement formatrice.<\\/p>\\r\\n\\r\\n<p>Nous vous confions des objectifs concrets sur 6 mois, en lien avec nos activit&eacute;s, nos clients et vos talents. Nous vous transf&eacute;rons nos comp&eacute;tences, nos m&eacute;thodologies, nos outils et nos tours de mains.<\\/p>\\r\\n\\r\\n<p>Vous recherchez un vrai stage dans une ambiance professionnelle, entrepreneuriale et conviviale, candidatez &agrave; l&#39;une de nos offres.<\\/p>\\r\\n","testimonial1_id":"7","testimonial2_id":"3","testimonial3_id":""}}'),
(2, 'uk', '{"home":{"content":"<p><img alt=\\"\\" src=\\"http:\\/\\/www.geolid-glanchow.local\\/php\\/vitrine\\/jobs-asset\\/images\\/IGP2768W.jpg\\" style=\\"height:150px; width:100px\\" \\/>Since 2008, Geolid continues to grow. If the internet and mobile marketing world interests you, join us! Developer, sales, project manager, graphic designer, marketer&hellip; The geolid adventure awaits you!<\\/p>\\r\\n\\r\\n<p><a href=\\"http:\\/\\/www.geolid-glanchow.local\\/php\\/vitrine\\/jobs-asset\\/files\\/offers-europe.pdf\\">http:\\/\\/www.geolid-glanchow.local\\/php\\/vitrine\\/jobs-asset\\/files\\/offers-europe.pdf<\\/a><br \\/>\\r\\nWe offer a unique opportunity to help reinvent the world of local digital marketing. You will contribute to and shape our innovation process to drive new ways for advertisers to attract, and sell to, offline buyers.<\\/p>\\r\\n\\r\\n<p>Since 2008, Geolid continues to grow. If the internet and mobile marketing world interests you, join us! Developer, sales, project manager, graphic designer, marketer&hellip; The geolid adventure awaits you!<\\/p>\\r\\n","jobs":"<ol>\\r\\n\\t<li>Blastom&egrave;re<\\/li>\\r\\n\\t<li>G&eacute;n&eacute;tique<\\/li>\\r\\n<\\/ol>\\r\\n","testimonial1_id":"10"}}');
```

Config apache.

```conf
ServerName geolid.jobs
ServerAlias fr.geolid.jobs
ServerAlias uk.geolid.jobs

suPHP_UserGroup glanchow glanchow

DocumentRoot "/home/glanchow/www/jobs/web"

<Directory "/home/glanchow/www/jobs/web">
    AuthUserFile /home/glanchow/www/jobs/htpasswd-geolid.jobs
    AuthGroupFile /dev/null
    AuthName "Protected zone"
    AuthType Basic
    Require user geolid
    #Allow from all
    AllowOverride All
    Options -Indexes
</Directory>

ErrorLog /home/glanchow/log/jobs/error.log

# Possible values include: debug, info, notice, warn, error, crit,
# alert, emerg.
LogLevel warn

CustomLog /home/glanchow/log/jobs/access.log combined
```

Install vendors.

```bash
composer install
```

cp htaccess-geolid.jobs .htaccess
cd web
cp htaccess-prod htaccess

KCFinder dans l'ERP : security disabled ...
Changer le uploadURL du trunk/kcfinder/config.php



Mettre à jour la table recrutement lors de la transition.

```sql
ALTER TABLE recrutement
       ADD content LONGTEXT AFTER zone,
       ADD created DATETIME,
       ADD updated DATETIME,
       ADD status VARCHAR(255),
       ADD status_changed DATETIME
;


UPDATE recrutement SET content = CONCAT('<h2>Qui sommes nous</h2><p><b>GEOLID</b> con&ccedil;oit et commercialise des solutions de communication web to store <b>g&eacute;olocalis&eacute;es</b> pour les <b>artisans, commer&ccedil;ants et PME.</b> Nous sommes partenaires de <b>Google</b> et du r&eacute;seau Proxistore f&eacute;d&eacute;rant les plus grands &eacute;diteurs de presse fran&ccedil;ais (L\'Equipe.fr, 20 Minutes.fr, les magazines des Groupes l\'Express et Marie Claire, LeMonde.fr, etc.). <b>GEOLID</b>, c\'est aujourd\'hui : <b>7M&euro; CA, 3000 clients, 8 agences, 120 salari&eacute;s</b> et un taux de satisfaction clients tr&egrave;s sup&eacute;rieur &agrave; la profession.</p><h2>Description du poste</h2><p>', responsabilites, '</p><h2>Votre profil</h2><p>', profil, '</p><h2>Nous vous offrons</h2><p>', renumeration,'</p>');
```

ALTER TABLE rh_candidats MODIFY id_agence int(11);


```

parameters.yml

```yml
    geolid_job.domain: geolid.jobs
    geolid_job.geolid: http://www.geolid.com
```

routing.yml

```yml
geolid_job:
    resource: "@GeolidJobsBundle/Resources/config/routing.yml"
```

config.yml

```yml
assetic:
    bundles:
        - GeolidJobBundle

cnerta_breadcrumb:
    twig:
        template: GeolidJobBundle:Menu:breadcrumb.html.twig

doctrine:
    orm:
        auto_mapping: true
        dql:
            string_functions:
                FIELD: Geolid\JobBundle\Doctrine\FieldFunction
                FIND_IN_SET: Geolid\JobBundle\Doctrine\FindInSetFunction

geolid_job:
    applications_path: %kernel.root_dir%/../web/job/application
    applications_url: %geolid_job.domain%/job/application
    apply_uk_pdf_url: %geolid_job.geolid%/php/vitrine/jobs-asset/documents/apply_uk.pdf
    countries: [de, fr]
    domain: %geolid_job.domain%
    from_email: contact@geolid.com
    from_name: Geolid
    news_base_url: %geolid_job.geolid%/actualites/
    news_end_url: .htm
    offers_europe_pdf_url: %geolid_job.geolid%/php/vitrine/jobs-asset/documents/offers-europe.pdf
    rh_manager_url: %geolid_job.geolid%/?url=equipe&tab=manager
    testimonial_base_url: %geolid_job.geolid%/php/vitrine/jobs-asset/testimonials/

jms_i18n_routing:
    default_locale: fr
    locales: [de, fr, en]
    strategy: custom

knp_menu:
    twig:
        template: GeolidJobBundle:Menu:menu.html.twig

services:
    twig.extension.intl:
        class: Twig_Extensions_Extension_Intl
        tags:
            - { name: twig.extension }

sonata_block:
    blocks:
        job.block.customers.revenues: ~
        job.block.customers.cards: ~
        job.block.international: ~
        job.block.news: ~

swiftmailer:
    default_mailer: default
    mailers:
        default:
            transport: "%mailer_transport%"
            encryption: "%mailer_encryption%"
            auth_mode: "%mailer_auth_mode%"
            host: "%mailer_host%"
            port: "%sendgrid_port%"
            username: "%mailer_user%"
            password: "%mailer_password%"
            spool: { type: memory }
        sendgrid:
            transport: "%sendgrid_transport%"
            encryption: "%sendgrid_encryption%"
            auth_mode: "%sendgrid_auth_mode%"
            host: "%sendgrid_host%"
            port: "%sendgrid_port%"
            username: "%sendgrid_user%"
            password: "%sendgrid_password%"
            spool: { type: memory }

twig:
    debug: "%kernel.debug%"
    exception_controller: job.controller.exception:showAction
    globals:
        geolid_facebook: https://www.facebook.com/geolid
        geolid_twitter: https://twitter.com/geolid_com
        geolid_googleplus: https://plus.google.com/+geolid
    strict_variables: "%kernel.debug%"

vich_uploader:
    db_driver: orm
    mappings:
        job_cv:
            uri_prefix: job/application
            upload_destination: %kernel.root_dir%/../web/job/application
            namer: job.namer.cv
        job_cl:
            uri_prefix: job/application
            upload_destination: %kernel.root_dir%/../web/job/application
            namer: job.namer.cv
        job_certificates:
            uri_prefix: job/application
            upload_destination: %kernel.root_dir%/../web/job/application
            namer: job.namer.cv
```


Git
---

```
echo web/job >> .gitignore
```



Deploy in development
---------------------

```bash
cp web/htaccess-prod .htaccess
cp src/Geolid/JobBundle/Resources/public/img/geolid.png web/favicon.png


```bash
mkdir -p app/cache
mkdir -p app/logs

chgrp -R www-data app/cache/
chgrp -R www-data app/logs/
chmod -R 775 app/cache/
chmod -R 775 app/logs/

mkdir -p web/job/application
mkdir -p web/job/asset
mkdir -p web/job/testimonial

chgrp -R www-data web/job
chmod -R 775 web/job

php app/console assetic:dump --env=prod --no-debug

php app/console assets:install web/ --symlink
```

Deploy in production
--------------------

### First time

```bash
cp web/htaccess-prod .htaccess
cp src/Geolid/JobBundle/Resources/public/img/geolid.png web/favicon.png


```bash
mkdir -p app/cache
mkdir -p app/logs

chgrp -R www-data app/cache/
chgrp -R www-data app/logs/
chmod -R 775 app/cache/
chmod -R 775 app/logs/

mkdir -p web/job/application
mkdir -p web/job/asset
mkdir -p web/job/testimonial

chgrp -R www-data web/job
chmod -R 775 web/job

php app/console assetic:dump --env=prod --no-debug

php app/console assets:install web/ --symlink
```

### Refresh

```bash
php app/console cache:clear --env=prod --no-debug
php app/console cache:warmup --env=prod --no-debug
php app/console assetic:dump --env=prod --no-debug
```

5. Multilingue
--------------

### Locale

La locale est définie à partir du sous-domaine.
Voir EventListener/LocaleListener.php

### Traductions

Les pages communes au site en version française sont traduites dans
les fichiers de traduction.

Par contre, comme les pages étrangères ont été ajoutées au fur et à
mesure et se basent sur un design différents,
elles comportent des éléments traduits en dur dans les templates.


### Traduction des routes.

```sh
php app/console translation:extract --enable-extractor=jms_i18n_routing --bundle="GeolidJobBundle" --domain="routes" de en
```
