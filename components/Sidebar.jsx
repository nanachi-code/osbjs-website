import SidebarItem from './SidebarItem.jsx'

const sidebarItems = [
	{
		title: 'Getting started',
		items: [
			{
				documentSlug: 'installation',
				title: 'Installation',
			},
			{
				documentSlug: 'create-your-first-storyboard',
				title: 'Create your first storyboard',
			},
			{
				documentSlug: 'introducing-components',
				title: 'Introducing components',
			},
		],
	},
	{
		title: 'Core',
		items: [
			{
				documentSlug: 'osbjs-storyboard',
				title: 'Storyboard',
			},
			{
				documentSlug: 'osbjs-diff-storyboard',
				title: 'DiffSpecificStoryboard',
			},
			{
				documentSlug: 'osbjs-component',
				title: 'Component',
			},
			{
				documentSlug: 'osbjs-scene',
				title: 'Scene',
			},
			{
				documentSlug: 'osbjs-sprite',
				title: 'Sprite',
			},
			{
				documentSlug: 'osbjs-animation',
				title: 'Animation',
			},
			{
				documentSlug: 'osbjs-sample',
				title: 'Sample',
			},
			{
				documentSlug: 'osbjs-utils',
				title: 'Utils',
			},
			{
				documentSlug: 'osbjs-expressions',
				title: 'Expressions',
			},
			{
				documentSlug: 'osbjs-enums',
				title: 'Enums',
			},
		],
	},
	{
		title: 'CLI',
		items: [
			{
				documentSlug: 'cli',
				title: 'CLI',
			}
		]
	},
	{
		title: 'Beatmap parser',
		items: [
			{
				documentSlug: 'beatmap',
				title: 'Beatmap',
			},
			{
				documentSlug: 'beatmap-hitobjects',
				title: 'Hit objects',
			},
			{
				documentSlug: 'beatmap-types',
				title: 'Types',
			},
			{
				documentSlug: 'beatmap-enums',
				title: 'Enums',
			},
		],
	},
	{
		title: 'Pre-built components',
		items: [
			{
				documentSlug: 'components-bg',
				title: 'Background',
			},
			{
				documentSlug: 'components-lyrics',
				title: 'Lyrics',
			},
			{
				documentSlug: 'components-hitobjecthighlight',
				title: 'HitObjectHighlight',
			},
			{
				documentSlug: 'components-removebg',
				title: 'RemoveBackground',
			},
			{
				documentSlug: 'components-importosb',
				title: 'ImportOsb',
			},
		],
	},
	{
		title: 'Texture generator',
		items: [
			{
				documentSlug: 'txtgen',
				title: 'Introduction',
			},
			{
				documentSlug: 'txtgen-texturegenerator',
				title: 'TextureGenerator',
			},
			{
				documentSlug: 'txtgen-texture',
				title: 'Texture',
			},
		],
	},
	{
		title: 'Math',
		items: [
			{
				documentSlug: 'math-helper',
				title: 'Helper functions',
			},
			{
				documentSlug: 'math-vector2',
				title: 'Vector2',
			},
			{
				documentSlug: 'math-vector3',
				title: 'Vector3',
			},
			{
				documentSlug: 'math-vector4',
				title: 'Vector4',
			},
			{
				documentSlug: 'math-quaternion',
				title: 'Quaternion',
			},
			{
				documentSlug: 'math-matrix3',
				title: 'Matrix3',
			},
			{
				documentSlug: 'math-matrix4',
				title: 'Matrix4',
			},
			{
				documentSlug: 'math-random',
				title: 'Random numbers',
			},
		],
	},
]

function Sidebar({ isSidebarOpen }) {
	return (
		<aside className={`fixed inset-0 ${isSidebarOpen ? 'hidden' : ''} top-24 z-[99] w-80 overflow-y-auto bg-white md:block`}>
			<div className="p-4">
				<ul>
					{sidebarItems.map((item) => (
						<li className="mb-8" key={item.title}>
							<h5 className="mb-3 font-semibold">{item.title}</h5>
							<ul className="space-y-2">
								{item.items.map((childItem) => (
									<SidebarItem key={childItem.documentSlug} {...childItem} />
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
