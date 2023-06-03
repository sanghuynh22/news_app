import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import parse from "html-react-parser";

const Detail = () => {
	const { id } = useParams();
	const text: string =
		"<h1>Bitcoin: The Future of Currency or a Risky Investment?</h1><p>Bitcoin, the world's most popular cryptocurrency, has been making headlines for years. Some see it as a revolutionary new form of currency, while others view it with skepticism and caution.</p><p>At its core, Bitcoin is a digital currency that operates on a decentralized peer-to-peer network. Transactions are recorded on a public ledger called the blockchain, which is maintained by a network of computers around the world. This means that transactions can be processed more quickly and cheaply than with traditional banking systems. Additionally, Bitcoin is not subject to the same government regulations and oversight that traditional currencies are, which some see as a way to protect their financial privacy.</p><p>Proponents of Bitcoin argue that it offers several advantages over traditional currencies. For one, it could provide increased financial freedom and security for individuals who may be unbanked or underbanked. In addition, it could help streamline cross-border transactions and reduce fees associated with traditional banking methods.</p><p>However, there are also many risks associated with investing in Bitcoin. Its highly volatile nature means that its value can fluctuate wildly in short periods of time, leading to potential losses for investors. Additionally, Bitcoin has been linked to illegal activities such as money laundering and drug trafficking, which has led to increased scrutiny from law enforcement agencies.</p><p>Despite these concerns, Bitcoin's popularity continues to grow. Major companies such as Tesla and PayPal have recently announced plans to accept Bitcoin as a form of payment, further legitimizing the digital currency. Some analysts predict that Bitcoin could eventually become a widely accepted alternative to traditional currencies, while others see it as a speculative asset with potential for significant returns.</p><p>So, what does the future hold for Bitcoin? Only time will tell. While there are certainly risks associated with investing in the cryptocurrency, its continued growth and acceptance suggest that it may have a place in the global economy. As with any investment, it's important for individuals to carefully consider the risks and potential rewards before deciding whether or not to invest in Bitcoin.</p>";
	return (
		<div className="container">
			<Header />
			<div className="detail">
				<div className="detail_top">
					<p className="detail_title">
						Solana (SOL) bứt phá: Bền vững hay Tạm thời?
					</p>
					<p className="detail_time">01/06/2023 11:26</p>
				</div>
				<div className="detail_content">
					{parse(text)}
					<div className="detail_author">
						<p className="detail_author_p">SN_Nour</p>
					</div>
				</div>
				<p className="detail_options_label">Gợi ý</p>

				<div className="detail_options">
					{[1, 2, 3, 4, 5, 6].map(() => (
						<div className="detail_option">
							<img src="" className="detail_option_img" />
							<p className="detail_option_p">
								Chainlink (LINK) sẽ bật tăng mạnh mẽ nếu hỗ trợ này được giữ
								vữngChainlink (LINK) sẽ bật tăng mạnh mẽ nếu hỗ trợ này được giữ
								vững
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Detail;
