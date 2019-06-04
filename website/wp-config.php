<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i4061853_wp1');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}6A#bx|]O}C!vw (~NRfp1 ;e@VHX0xwx,9q/I>RS`8k9axuMy;}d}[;*4oMA*34');
define('SECURE_AUTH_KEY',  ' x!nz~<~QJQ|X/mrtWF(%Td;y}^2 2>:M/NdxBek?Rm`N0sM;st{qd;9LhB}1zz}');
define('LOGGED_IN_KEY',    '#=@R`Qy2Nm(Ea+G9wE9hW4Hm-Kte^Vw6Ou4TAY>9X&S+3J|FS7&Z>`ZluZj@OB1W');
define('NONCE_KEY',        '/0E_pXt}7t_v/l6a_hTJ)7jaF^o^U$/ZZVy$Rqv~{PC>h2%n>G,$Y@=a6,7/^k8~');
define('AUTH_SALT',        'BftL`TJ[_b/X#x{[g+=7z;+k;~R/{cY*/)0=}gbmc)e3qOA7[Xn)VBf?~}o*ZaS]');
define('SECURE_AUTH_SALT', '_V2OorHD)r@38d xfjFz$ x**VK+#A<Wg&=S)K|=`ah!AA*.b$P[8w+;(<p$={-K');
define('LOGGED_IN_SALT',   'FE?sHhC_q%4^_NkI[0s@/]<MB=qYV>&s{ICbT:HBc`^}2QFTnT;Tj(6]TQ<}UDZ6');
define('NONCE_SALT',       'i.x$[I`DAd1O}_kQge7NtKwPj@.5<8%TxGvvzM8LY-:DZD@]MdCC(Y>G9`P/71/>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
