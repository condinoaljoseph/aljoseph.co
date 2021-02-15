const Container = ({ children }) => {
		return (
		<div>
			<div className="min-h-screen font-serif">
				<div className="max-w-2xl mx-auto py-10 px-6">{children}</div>
			</div>
		</div>
	);
};

export default Container;
