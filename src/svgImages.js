import React from "react";

import Icon from "@ant-design/icons";

const inboxSVG = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242L16.91 5.757a1 1 0 0 0-.97-.757H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z'
      />
    </g>
  </svg>
);
export const InboxIcon = props => <Icon component={inboxSVG} {...props} />;

const todaySvg = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z'
      />
      <text
        font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
        font-size='9'
        transform='translate(4 2)'
        font-weight='500'
      >
        <tspan x='8' y='15' text-anchor='middle'>
          08
        </tspan>
      </text>
    </g>
  </svg>
);
export const TodayIcon = props => <Icon component={todaySvg} {...props} />;

const upcomingSvg = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z'
      />
    </g>
  </svg>
);
export const UpcomingIcon = props => <Icon component={upcomingSvg} {...props} />;
