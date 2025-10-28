/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/presentation/components/**/*.{ts,tsx}',
		'./src/libs/components/ui/**/*.{ts,tsx}',
		'./src/presentation/templates/**/*.{ts,tsx}',
		'./src/app/**/*.tsx',
	],
	prefix: '',
	theme: {
		fontFamily: {
			highlight: 'var(--font-highlight)',
			heading: 'var(--font-heading)',
			body: 'var(--font-body)',
		},
		fontSize: {
			sm: ['0.875rem', { lineHeight: '0.875rem' }],
			base: ['1rem', { lineHeight: '170%' }],
			lg: ['1.125rem', { lineHeight: '1.688rem' }],
			xl: ['1.25rem', { lineHeight: '1.875rem' }],
			xxl: ['1.375rem', { lineHeight: '2.063rem' }],
			'2xl': ['1.5rem', { lineHeight: '2.25rem' }],
			'3xl': ['1.625rem', { lineHeight: '2.438rem' }],
			'4xl': ['1.75rem', { lineHeight: '2.625rem' }],
			'5xl': ['2rem', { lineHeight: '3rem' }],
			'6xl': ['2.25rem', { lineHeight: '2.875rem' }],
			'7xl': ['2.375rem', { lineHeight: '2.375rem' }],
			'8xl': ['2.625rem', { lineHeight: '3.25rem' }],
			'9xl': ['2.875rem', { lineHeight: '3.5rem' }],
			'10xl': ['3.125rem', { lineHeight: '4.688rem' }],
			'11xl': ['3.5rem', { lineHeight: '4.125rem' }],
			'12xl': ['3.75rem', { lineHeight: '5.625rem' }],
			'13xl': ['5rem', { lineHeight: '7.5rem' }],
			'14xl': ['6.25rem', { lineHeight: '9.375rem' }],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				secondary: {
					400: '#9654F4',
					500: '#8133F1',
				},
				background: {
					200: 'var(--background-200)',
					300: 'var(--background-300)',
					400: 'var(--background-400)',
					500: 'var(--background-500)',
				},
				neutral: {
					50: '#E8E8E8',
					100: '#B7B7B7',
					500: '#323232',
				},
				complementary: {
					white: '#F6F6F6',
					red: '#D82F19',
					green: '#148A4A',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			backgroundImage: {
				'hero-mobile':
					'url(https://media.graphassets.com/YqvnE6iTbHPK65igRQlA)',
				'hero-desktop':
					'url(https://media.graphassets.com/gdWiuI5ORQGQj2WAaE5n)',
				shape: 'url(https://media.graphassets.com/Ymfte6u4QKKRTZu8ruwd)',
				'gradient-primary':
					'linear-gradient(90.07deg, #8133F1 7.89%, #00A3FF 169.75%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
