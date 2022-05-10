import React, { useState } from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

export default function Scroll() {
	const [toggleTxt, setToggleTxt] = useState(false);

	const animation = useSpring({
		opacity: toggleTxt ? 1 : 0,
		transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
	});

	return (
		<div>
			<p className='scroll-txt'>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				unde adipisci fuga molestiae id itaque, ipsa incidunt pariatur
				impedit beatae iusto eius corporis magni consequuntur,
				consectetur rem iure porro dolor ipsam sunt accusantium!
				Architecto voluptatum nulla quos quis, quibusdam maiores magni
				hic vitae corporis id sint rerum repellendus necessitatibus
				porro, voluptates consequuntur ipsam quaerat nostrum
				perspiciatis! Ab consequuntur accusamus consectetur sed
				cupiditate. Dicta, distinctio velit dolor aperiam culpa
				consectetur pariatur delectus sed similique sequi, fugiat
				voluptas a obcaecati voluptatum magni, deleniti necessitatibus
				error nobis? Ab mollitia voluptatum ducimus temporibus sapiente
				rerum perspiciatis soluta veniam, consequatur voluptatem quos
				aut dolores eaque voluptate iure dicta cupiditate commodi velit
				ea. Voluptatem unde labore beatae quod molestias ad consequatur,
				ullam omnis, perspiciatis minus nesciunt explicabo vitae aperiam
				voluptatum illo, laboriosam ex. Aperiam, hic! Ipsum dolore
				similique autem voluptates obcaecati rem, maiores sunt quae
				distinctio. Quos quisquam reiciendis dicta harum quod veritatis
				obcaecati omnis nostrum consequuntur, ea ipsa nesciunt, in
				incidunt consequatur vero voluptatum aperiam sit adipisci
				corporis! Soluta molestias est quam eos corrupti sapiente
				dolores necessitatibus provident consectetur quasi, animi hic
				sint veniam tenetur cupiditate architecto recusandae repudiandae
				accusamus sit deserunt maiores numquam. Fuga perferendis sint
				aspernatur a corporis ducimus quaerat, dolorem repellendus non.
			</p>
			<p className='scroll-txt'>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				unde adipisci fuga molestiae id itaque, ipsa incidunt pariatur
				impedit beatae iusto eius corporis magni consequuntur,
				consectetur rem iure porro dolor ipsam sunt accusantium!
				Architecto voluptatum nulla quos quis, quibusdam maiores magni
				hic vitae corporis id sint rerum repellendus necessitatibus
				porro, voluptates consequuntur ipsam quaerat nostrum
				perspiciatis! Ab consequuntur accusamus consectetur sed
				cupiditate. Dicta, distinctio velit dolor aperiam culpa
				consectetur pariatur delectus sed similique sequi, fugiat
				voluptas a obcaecati voluptatum magni, deleniti necessitatibus
				error nobis? Ab mollitia voluptatum ducimus temporibus sapiente
				rerum perspiciatis soluta veniam, consequatur voluptatem quos
				aut dolores eaque voluptate iure dicta cupiditate commodi velit
				ea. Voluptatem unde labore beatae quod molestias ad consequatur,
				ullam omnis, perspiciatis minus nesciunt explicabo vitae aperiam
				voluptatum illo, laboriosam ex. Aperiam, hic! Ipsum dolore
				similique autem voluptates obcaecati rem, maiores sunt quae
				distinctio. Quos quisquam reiciendis dicta harum quod veritatis
				obcaecati omnis nostrum consequuntur, ea ipsa nesciunt, in
				incidunt consequatur vero voluptatum aperiam sit adipisci
				corporis! Soluta molestias est quam eos corrupti sapiente
				dolores necessitatibus provident consectetur quasi, animi hic
				sint veniam tenetur cupiditate architecto recusandae repudiandae
				accusamus sit deserunt maiores numquam. Fuga perferendis sint
				aspernatur a corporis ducimus quaerat, dolorem repellendus non.
			</p>
			<Waypoint
				bottomOffset='30%'
				onEnter={() => {
					if (!toggleTxt) {
						setToggleTxt(true);
					}
				}}
			/>
			<animated.div style={animation} className='cta-section'>
				<h2>N'en ratez pas une miette !</h2>
				<form>
					<label htmlFor='email'>
						Inscrivez-vous à la newsletter
					</label>
					<input type='email' id='email' />
				</form>
			</animated.div>
			<p className='scroll-txt'>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				unde adipisci fuga molestiae id itaque, ipsa incidunt pariatur
				impedit beatae iusto eius corporis magni consequuntur,
				consectetur rem iure porro dolor ipsam sunt accusantium!
				Architecto voluptatum nulla quos quis, quibusdam maiores magni
				hic vitae corporis id sint rerum repellendus necessitatibus
				porro, voluptates consequuntur ipsam quaerat nostrum
				perspiciatis! Ab consequuntur accusamus consectetur sed
				cupiditate. Dicta, distinctio velit dolor aperiam culpa
				consectetur pariatur delectus sed similique sequi, fugiat
				voluptas a obcaecati voluptatum magni, deleniti necessitatibus
				error nobis? Ab mollitia voluptatum ducimus temporibus sapiente
				rerum perspiciatis soluta veniam, consequatur voluptatem quos
				aut dolores eaque voluptate iure dicta cupiditate commodi velit
				ea. Voluptatem unde labore beatae quod molestias ad consequatur,
				ullam omnis, perspiciatis minus nesciunt explicabo vitae aperiam
				voluptatum illo, laboriosam ex. Aperiam, hic! Ipsum dolore
				similique autem voluptates obcaecati rem, maiores sunt quae
				distinctio. Quos quisquam reiciendis dicta harum quod veritatis
				obcaecati omnis nostrum consequuntur, ea ipsa nesciunt, in
				incidunt consequatur vero voluptatum aperiam sit adipisci
				corporis! Soluta molestias est quam eos corrupti sapiente
				dolores necessitatibus provident consectetur quasi, animi hic
				sint veniam tenetur cupiditate architecto recusandae repudiandae
				accusamus sit deserunt maiores numquam. Fuga perferendis sint
				aspernatur a corporis ducimus quaerat, dolorem repellendus non.
			</p>
			<p className='scroll-txt'>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				unde adipisci fuga molestiae id itaque, ipsa incidunt pariatur
				impedit beatae iusto eius corporis magni consequuntur,
				consectetur rem iure porro dolor ipsam sunt accusantium!
				Architecto voluptatum nulla quos quis, quibusdam maiores magni
				hic vitae corporis id sint rerum repellendus necessitatibus
				porro, voluptates consequuntur ipsam quaerat nostrum
				perspiciatis! Ab consequuntur accusamus consectetur sed
				cupiditate. Dicta, distinctio velit dolor aperiam culpa
				consectetur pariatur delectus sed similique sequi, fugiat
				voluptas a obcaecati voluptatum magni, deleniti necessitatibus
				error nobis? Ab mollitia voluptatum ducimus temporibus sapiente
				rerum perspiciatis soluta veniam, consequatur voluptatem quos
				aut dolores eaque voluptate iure dicta cupiditate commodi velit
				ea. Voluptatem unde labore beatae quod molestias ad consequatur,
				ullam omnis, perspiciatis minus nesciunt explicabo vitae aperiam
				voluptatum illo, laboriosam ex. Aperiam, hic! Ipsum dolore
				similique autem voluptates obcaecati rem, maiores sunt quae
				distinctio. Quos quisquam reiciendis dicta harum quod veritatis
				obcaecati omnis nostrum consequuntur, ea ipsa nesciunt, in
				incidunt consequatur vero voluptatum aperiam sit adipisci
				corporis! Soluta molestias est quam eos corrupti sapiente
				dolores necessitatibus provident consectetur quasi, animi hic
				sint veniam tenetur cupiditate architecto recusandae repudiandae
				accusamus sit deserunt maiores numquam. Fuga perferendis sint
				aspernatur a corporis ducimus quaerat, dolorem repellendus non.
			</p>
			<p className='scroll-txt'>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				unde adipisci fuga molestiae id itaque, ipsa incidunt pariatur
				impedit beatae iusto eius corporis magni consequuntur,
				consectetur rem iure porro dolor ipsam sunt accusantium!
				Architecto voluptatum nulla quos quis, quibusdam maiores magni
				hic vitae corporis id sint rerum repellendus necessitatibus
				porro, voluptates consequuntur ipsam quaerat nostrum
				perspiciatis! Ab consequuntur accusamus consectetur sed
				cupiditate. Dicta, distinctio velit dolor aperiam culpa
				consectetur pariatur delectus sed similique sequi, fugiat
				voluptas a obcaecati voluptatum magni, deleniti necessitatibus
				error nobis? Ab mollitia voluptatum ducimus temporibus sapiente
				rerum perspiciatis soluta veniam, consequatur voluptatem quos
				aut dolores eaque voluptate iure dicta cupiditate commodi velit
				ea. Voluptatem unde labore beatae quod molestias ad consequatur,
				ullam omnis, perspiciatis minus nesciunt explicabo vitae aperiam
				voluptatum illo, laboriosam ex. Aperiam, hic! Ipsum dolore
				similique autem voluptates obcaecati rem, maiores sunt quae
				distinctio. Quos quisquam reiciendis dicta harum quod veritatis
				obcaecati omnis nostrum consequuntur, ea ipsa nesciunt, in
				incidunt consequatur vero voluptatum aperiam sit adipisci
				corporis! Soluta molestias est quam eos corrupti sapiente
				dolores necessitatibus provident consectetur quasi, animi hic
				sint veniam tenetur cupiditate architecto recusandae repudiandae
				accusamus sit deserunt maiores numquam. Fuga perferendis sint
				aspernatur a corporis ducimus quaerat, dolorem repellendus non.
			</p>
		</div>
	);
}
