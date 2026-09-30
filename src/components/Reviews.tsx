/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, ExternalLink, Quote, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS, CUSTOMER_REVIEWS } from "../data/config";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 texture-cream-linen text-[#2A2018]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8893C] mb-3 inline-block">
            Verified Customer Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3B2416] mb-6">
            Loved by Homes Across Davangere
          </h2>

          {/* Large 4.6 Rating Lockup with 5 Brass Stars */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-col items-center p-6 bg-white/85 rounded-xl border border-[#B8893C]/30 shadow-sm mb-4"
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-semibold text-[#3B2416] tabular-nums">
                {BUSINESS_DETAILS.rating}
              </span>
              <span className="text-lg text-[#2A2018]/60 font-serif">/ 5.0</span>
            </div>

            {/* 5 Brass Stars */}
            <div className="flex items-center gap-1.5 mb-2 text-[#B8893C]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#B8893C] text-[#B8893C]"
                />
              ))}
            </div>

            <p className="text-sm font-medium text-[#2A2018]/80">
              Based on {BUSINESS_DETAILS.reviewCount} Google reviews
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Real Customer Reviews Cards (verbatim, 5 stars, Google Review attribution) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="craft-card bg-white/90 rounded-lg p-7 sm:p-8 border border-[#B8893C]/25 flex flex-col justify-between shadow-sm relative group"
            >
              {/* Subtle quote icon mark */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#B8893C]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#B8893C] text-[#B8893C]"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#B8893C]/25" />
              </div>

              {/* Verbatim quote */}
              <blockquote className="font-serif text-lg sm:text-xl text-[#3B2416] italic leading-relaxed mb-6 font-normal">
                "{review.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#B8893C]/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F5EDE0] border border-[#B8893C]/30 flex items-center justify-center text-xs font-serif font-semibold text-[#3B2416]">
                    {review.reviewerInitials}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#3B2416]">
                      {review.attribution}
                    </span>
                    <span className="block text-[11px] text-[#2A2018]/60">
                      {review.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-800 text-[11px] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>5.0</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Button to see more reviews on Google */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={BUSINESS_DETAILS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#F9F4EB] text-[#3B2416] font-medium text-sm border border-[#B8893C]/40 hover:border-[#B8893C] rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893C]"
          >
            <span>See more reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#B8893C]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
