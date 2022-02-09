import SidebarItem from './SidebarItem.jsx'

function Sidebar() {
	return (
		<aside className="fixed inset-0 top-24 w-80 overflow-y-auto">
			<div className="p-4">
				<ul>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">Getting started</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="installation" title="Installation" />
							<SidebarItem documentSlug="create-your-first-storyboard" title="Create your first storyboard" />
							<SidebarItem documentSlug="introducing-components" title="Introducing components" />
						</ul>
					</li>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">osbjs</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="osbjs-storyboard" title="Storyboard" />
							<SidebarItem documentSlug="osbjs-diff-storyboard" title="DiffSpecificStoryboard" />
							<SidebarItem documentSlug="osbjs-component" title="Component" />
							<SidebarItem documentSlug="osbjs-scene" title="Scene" />
							<SidebarItem documentSlug="osbjs-sprite" title="Sprite" />
							<SidebarItem documentSlug="osbjs-animation" title="Animation" />
							<SidebarItem documentSlug="osbjs-sample" title="Sample" />
							<SidebarItem documentSlug="osbjs-utils" title="Utils" />
							<SidebarItem documentSlug="osbjs-enums" title="Enums" />
							<SidebarItem documentSlug="osbjs-types" title="Types" />
						</ul>
					</li>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">osujs</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="osujs-usage" title="Usage" />
							<SidebarItem documentSlug="osujs-beatmap" title="Beatmap" />
							<SidebarItem documentSlug="osujs-hitobject" title="Hit objects" />
							<SidebarItem documentSlug="osujs-types" title="Types" />
							<SidebarItem documentSlug="osujs-enums" title="Enums" />
						</ul>
					</li>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">components</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="components-usage" title="Usage" />
							<SidebarItem documentSlug="components-bg" title="Background" />
							<SidebarItem documentSlug="components-hitobjecthiglight" title="HitObjectHighlight" />
							<SidebarItem documentSlug="components-removebackground" title="RemoveBackground" />
						</ul>
					</li>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">txtgen</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="txtgen-usage" title="Usage" />
							<SidebarItem documentSlug="txtgen-texture" title="Texture" />
							<SidebarItem documentSlug="txtgen-texture-generator" title="TextureGenerator" />
							<SidebarItem documentSlug="txtgen-types" title="Types" />
						</ul>
					</li>
					<li className="mb-8">
						<h5 className="mb-3 font-semibold">math</h5>
						<ul className="space-y-2">
							<SidebarItem documentSlug="math-usage" title="Usage" />
							<SidebarItem documentSlug="math-helper" title="Helper functions" />
							<SidebarItem documentSlug="math-vector2" title="Vector2" />
							<SidebarItem documentSlug="math-vector3" title="Vector3" />
							<SidebarItem documentSlug="math-vector4" title="Vector4" />
							<SidebarItem documentSlug="math-quarternion" title="Quaternion" />
							<SidebarItem documentSlug="math-matrix3" title="Matrix3" />
							<SidebarItem documentSlug="math-matrix4" title="Matrix4" />
						</ul>
					</li>
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
